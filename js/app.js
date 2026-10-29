/* AlertaVecinal — Frontend con modo demostración y conexión Supabase opcional. */
(() => {
  'use strict';

  // --- SELECCIÓN DE ELEMENTOS DEL DOM ---
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  // --- CONFIGURACIÓN Y VERIFICACIÓN DE SERVICIOS ---
  const cfg = window.APP_CONFIG || {};
  // Verifica si las credenciales de Supabase son válidas y reales
  const configured = cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && !cfg.SUPABASE_URL.startsWith('AQUI_') && !cfg.SUPABASE_ANON_KEY.startsWith('AQUI_');
  // Verifica si el token de Mapbox es válido
  const mapConfigured = typeof cfg.MAPBOX_TOKEN === 'string' && cfg.MAPBOX_TOKEN.startsWith('pk.');

  // --- CLIENTE SUPABASE ---
  let supabase = null;
  if (configured && window.supabase) { 
    try { 
      supabase = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY); 
    } catch(e) { 
      console.error(e); 
    } 
  }

  // --- ESTADO GLOBAL DE LA APLICACIÓN ---
  const state = { 
    user: null, 
    role: 'vecino', 
    page: 'dashboard', 
    incidents: [], 
    posts: [], 
    stations: [], 
    police: [], 
    selected: null, 
    map: null, 
    mapMarkers: [], 
    realtime: null, 
    demo: !supabase, // Si no hay Supabase, se activa el modo demostración local
    filters: { search: '', status: '', category: '', zone: '', dateFrom: '', dateTo: '' }, 
    notifications: [], 
    sound: true, 
    currentLocation: null, 
    locationWatchId: null, 
    userMarker: null, 
    userAccuracy: null, 
    reportPoint: null, 
    reportMarker: null, 
    responses: [], 
    responseSupported: true, 
    responseMarkers: [], 
    responseIncidentId: null, 
    responseSentAt: 0, 
    mapCaptureMode: false, 
    mapCorrectIncidentId: null, 
    mapSelectedMarker: null, 
    pendingMapFocus: null 
  };

  // --- DICCIONARIOS DE DATOS Y ENUMERACIONES ---
  // Categorías de incidentes con su ícono y clase visual
  const categories = [
    {id:'robo',name:'Robo / asalto',icon:'🚨',cls:'theft'}, 
    {id:'sospechoso',name:'Persona sospechosa',icon:'👁️',cls:'suspicious'},
    {id:'violencia',name:'Violencia',icon:'⚠️',cls:'other'}, 
    {id:'emergencia',name:'Emergencia',icon:'🆘',cls:'other'}, 
    {id:'vandalismo',name:'Vandalismo',icon:'🔨',cls:'other'}, 
    {id:'otro',name:'Otro incidente',icon:'📍',cls:'other'}
  ];

  // Mapeo de estados a clases CSS para los estilos
  const statusMap = {
    'Activa':'status-active',
    'Recibida':'status-received',
    'En camino':'status-way',
    'Atendida':'status-attended',
    'Resuelta':'status-resolved',
    'Falsa alarma':'status-false'
  };

  // Etiquetas normalizadas para los estados de las alertas
  const statusLabels = {
    activa:'Activa',
    recibida:'Recibida',
    'en camino':'En camino',
    atendida:'Atendida',
    resuelta:'Resuelta',
    'falsa alarma':'Falsa alarma'
  };

  // Opciones del menú de navegación según el rol del usuario asignado
  const navByRole = {
    vecino:[['dashboard','▦','Resumen'],['map','⌖','Mapa de alertas'],['my-reports','▤','Mis reportes'],['notifications','♧','Notificaciones'],['profile','◎','Mi perfil'],['settings','⚙','Preferencias']],
    policia:[['dashboard','▦','Panel policial'],['map','⌖','Mapa operativo'],['alerts','⚑','Alertas activas'],['history','◷','Historial de atención'],['profile','◎','Mi perfil']],
    admin:[['dashboard','▦','Panel general'],['map','⌖','Mapa y mapa de calor'],['alerts','⚑','Todos los incidentes'],['police-users','♙','Cuentas policiales'],['stations','⌖','Retenes policiales'],['statistics','▥','Estadísticas'],['profile','◎','Mi perfil']]
  };

  // Usuarios simulados para el entorno de pruebas (Modo Demo)
  const demoUsers = {
    vecino:{id:'demo-vecino',name:'María Fernanda Rojas',email:'vecino@demo.com',phone:'70012345',role:'vecino',active:true},
    policia:{id:'demo-policia',name:'Sgto. Carlos Mendoza',email:'policia@demo.com',phone:'71234567',role:'policia',active:true,station_id:'station-1',station_name:'Retén Central'},
    admin:{id:'demo-admin',name:'Administrador DHAAP',email:'admin@demo.com',phone:'72000000',role:'admin',active:true}
  };

  // Datos semilla de incidentes para poblar la app al iniciar por primera vez
  const seedIncidents = [
    {id:'AV-1042',user_id:'demo-vecino',reporter_name:'María Fernanda Rojas',category:'robo',description:'Vecinos reportan intento de robo a un vehículo estacionado.',latitude:-16.5008,longitude:-68.1336,address:'Zona Central · La Paz',status:'Recibida',created_at:new Date(Date.now()-8*60000).toISOString(),confirmations:4,photo_url:null,comments:[{name:'Luis A.',text:'Vi a dos personas salir corriendo hacia la avenida.',created_at:new Date(Date.now()-5*60000).toISOString()}],observations:[],station_id:'station-1'},
    {id:'AV-1041',user_id:'demo-vecino',reporter_name:'María Fernanda Rojas',category:'sospechoso',description:'Persona intentando abrir las puertas de varios domicilios.',latitude:-16.5081,longitude:-68.1262,address:'Sopocachi · La Paz',status:'En camino',created_at:new Date(Date.now()-24*60000).toISOString(),confirmations:7,photo_url:null,comments:[],observations:[],station_id:'station-1'},
    {id:'AV-1040',user_id:'otro-vecino',reporter_name:'Vecino protegido',category:'vandalismo',description:'Daños a luminarias en la vía pública.',latitude:-16.4951,longitude:-68.1413,address:'San Pedro · La Paz',status:'Activa',created_at:new Date(Date.now()-48*60000).toISOString(),confirmations:2,photo_url:null,comments:[],observations:[],station_id:'station-1'},
    {id:'AV-1038',user_id:'otro-vecino',reporter_name:'Vecina del barrio',category:'robo',description:'Reporte de robo de teléfono en parada de transporte.',latitude:-16.5141,longitude:-68.1291,address:'Zona Sur · La Paz',status:'Atendida',created_at:new Date(Date.now()-4*3600000).toISOString(),confirmations:5,photo_url:null,comments:[],observations:[{name:'Sgto. Carlos Mendoza',text:'Se realizó patrullaje preventivo y se entrevistó a testigos.',created_at:new Date(Date.now()-3*3600000).toISOString()}],station_id:'station-1'},
    {id:'AV-1037',user_id:'demo-vecino',reporter_name:'María Fernanda Rojas',category:'otro',description:'Ruidos y movimiento inusual en un edificio desocupado.',latitude:-16.5035,longitude:-68.1204,address:'Miraflores · La Paz',status:'Resuelta',created_at:new Date(Date.now()-28*3600000).toISOString(),confirmations:1,photo_url:null,comments:[],observations:[],station_id:'station-1'}
  ];

  // Datos semilla de retenes o módulos policiales del sistema
  const seedStations = [
    {id:'station-1',name:'Retén Central',address:'Centro de La Paz',phone:'110',latitude:-16.4978,longitude:-68.1332,active:true},
    {id:'station-2',name:'Retén Sopocachi',address:'Zona Sopocachi',phone:'110',latitude:-16.5100,longitude:-68.1260,active:true}
  ];

  // --- FUNCIONES DE PERSISTENCIA LOCAL (DEMO) ---
  // Carga los datos guardados en el navegador o usa los datos semilla por defecto
  function loadDemo(){ 
    try { 
      const i=localStorage.getItem('av_incidents'); state.incidents=i?JSON.parse(i):seedIncidents; 
      const s=localStorage.getItem('av_stations');state.stations=s?JSON.parse(s):seedStations; 
      const p=localStorage.getItem('av_police');state.police=p?JSON.parse(p):[
        {id:'p-1',name:'Sgto. Carlos Mendoza',email:'policia@demo.com',phone:'71234567',station_id:'station-1',station_name:'Retén Central',active:true},
        {id:'p-2',name:'Cbo. Ana Quispe',email:'ana@demo.com',phone:'76543210',station_id:'station-2',station_name:'Retén Sopocachi',active:true}
      ]; 
    } catch(e) {
      state.incidents=seedIncidents; state.stations=seedStations; state.police=[]; 
    } 
  }

  // Guarda el estado actual en el localStorage si estamos operando en modo demo
  function saveDemo(){ 
    if(!state.demo) return; 
    localStorage.setItem('av_incidents',JSON.stringify(state.incidents));
    localStorage.setItem('av_stations',JSON.stringify(state.stations));
    localStorage.setItem('av_police',JSON.stringify(state.police)); 
  }

  // --- FUNCIONES UTILITARIAS Y DE FORMATEO ---
  // Sanitiza cadenas de texto para evitar inyecciones HTML (XSS)
  function esc(s=''){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  
  // Extrae las iniciales de un nombre propio para usar de avatar
  function initials(name='AV'){ return name.split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase(); }
  
  // Formatea marcas de tiempo a un formato local legible en Bolivia (es-BO)
  function fmtDate(v,short=false){ if(!v)return '—'; const d=new Date(v); return d.toLocaleString('es-BO',short?{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}:{day:'2-digit',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'}); }
  
  // Calcula y devuelve el tiempo relativo transcurrido (Ej: "Hace 5 min")
  function ago(v){ const m=Math.max(0,Math.floor((Date.now()-new Date(v).getTime())/60000)); if(m<1)return 'Ahora'; if(m<60)return `Hace ${m} min`; const h=Math.floor(m/60); if(h<24)return `Hace ${h} h`; return `Hace ${Math.floor(h/24)} d`; }
  
  // Busca un objeto de categoría por su ID único
  function category(id){ return categories.find(c=>c.id===id)||categories[categories.length-1]; }
  
  // Normaliza el texto de los estados para evitar errores de mayúsculas/minúsculas
  function normStatus(s){ const low=String(s||'Activa').toLowerCase(); return statusLabels[low]||s||'Activa'; }
  
  // Genera el código HTML para una etiqueta (pill) visual de estado
  function pill(s){ const v=normStatus(s); return `<span class="status-pill ${statusMap[v]||'status-active'}">${esc(v)}</span>`; }
  
  // Determina si una alerta sigue activa basándose en su estado actual
  function isActive(i){ return !['Atendida','Resuelta','Falsa alarma'].includes(normStatus(i.status)); }
  
