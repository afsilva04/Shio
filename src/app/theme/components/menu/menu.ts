import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    //DASHBOARD
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),

    //PAGES
    /*
    new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 40),
    new Menu (45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),   
    */

    /*
    //LIST
    new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    */

    //REPORTES
    new Menu (227, 'Reportes', null, null, 'line-chart', null, true, 0),
    new Menu (233, 'Ventas', '/pages/report-sales', null, 'credit-card', null, false, 227),
    new Menu (228, 'Inventario', '/pages/report-inventory', null, 'list-ul', null, false, 227),
    new Menu (229, 'Citas', '/pages/report-appointments', null, 'calendar-check-o', null, false, 227),    
    new Menu (234, 'Citas en curso', '/pages/report-appointments-in-progress', null, 'clock-o', null, false, 227),  
    new Menu (235, 'Cierre', '/pages/report-close', null, 'check', null, false, 227),    
    new Menu (236, 'Dia', '/pages/report-day', null, 'calendar-times-o', null, false, 227),    
    new Menu (237, 'Ventas anticipadas', '/pages/report-coupons', null, 'undo', null, false, 227),   

    //CITAS
    new Menu (209, 'Citas', null, null, 'calendar', null, true, 0),
    new Menu (210, 'Ver Citas', '/pages/appointment-list', null, 'calendar-check-o', null, false, 209),
    new Menu (211, 'Crear Cita', '/pages/appointment-create', null, 'calendar-plus-o', null, false, 209),

    //ENTRADAS
    new Menu (230, 'Entradas', null, null, 'sort-amount-asc', null, true, 0),
    new Menu (231, 'Ver Entradas', '/pages/entry-list', null, 'list-ul', null, false, 230),
    new Menu (232, 'Crear Entradas', '/pages/entry-create', null, 'plus', null, false, 230),

    //SALIDAS
    new Menu (224, 'Salidas', null, null, 'shopping-cart', null, true, 0),
    new Menu (225, 'Ver Salidas', '/pages/transaction-list', null, 'list-ul', null, false, 224),
    new Menu (226, 'Crear Salida', '/pages/transaction-out-create', null, 'plus', null, false, 224), 

    //USUARIOS
    //new Menu (200, 'Usuarios', null, null, 'users', null, true, 0),
    //new Menu (201, 'Ver Usuarios', '/pages/user-list', null, 'users', null, false, 200),
    //new Menu (202, 'Crear Usuario', '/pages/user-create', null, 'user-plus', null, false, 200),

    //EMPLEADOS
    new Menu (203, 'Empleados', null, null, 'address-card', null, true, 0),
    new Menu (204, 'Ver Empleados', '/pages/employee-list', null, 'users', null, false, 203),
    //new Menu (205, 'Crear Empleado', '/pages/employee-create', null, 'user-plus', null, false, 203),    

    //CLIENTES
    new Menu (206, 'Clientes', null, null, 'handshake-o', null, true, 0),
    new Menu (207, 'Ver Clientes', '/pages/client-list', null, 'users', null, false, 206),
    new Menu (208, 'Crear Cliente', '/pages/client-create', null, 'user-plus', null, false, 206),

    //SUCURSALES
    //new Menu (212, 'Sucursales', null, null, 'briefcase', null, true, 0),
    //new Menu (213, 'Ver Sucurales', '/pages/subsidiary-list', null, 'list-ul', null, false, 212),
    //new Menu (214, 'Crear Sucursal', '/pages/subsidiary-create', null, 'plus', null, false, 212),

    //EMPRESAS
    //new Menu (215, 'Empresas', null, null, 'building-o', null, true, 0),
    //new Menu (216, 'Ver Empresas', '/pages/company-list', null, 'list-ul', null, false, 215),
    ////new Menu (217, 'Crear Empresas', '/pages/company-create', null, 'plus', null, false, 215),

    //SERVICIOS
    new Menu (218, 'Servicios', null, null, 'thumbs-up', null, true, 0),
    new Menu (219, 'Ver Servicios', '/pages/service-list', null, 'list-ul', null, false, 218),
    //new Menu (220, 'Crear Servicio', '/pages/service-create', null, 'plus', null, false, 218),

    //PRODUCTOS
    new Menu (221, 'Productos', null, null, 'dropbox', null, true, 0),
    new Menu (222, 'Ver Productos', '/pages/product-list', null, 'list-ul', null, false, 221),
    //new Menu (223, 'Crear Producto', '/pages/product-create', null, 'plus', null, false, 221)   



    //EXTERNAL LINK
    //new Menu (200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]

export const verticalMenuItemsAdmin = [ 
    //DASHBOARD
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),

    //PAGES
    /*
    new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 40),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 40),
    new Menu (45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),   
    */

    /*
    //LIST
    new Menu (140, 'Level 1', null, null, 'folder-open-o', null, true, 0),
    new Menu (141, 'Level 2', null, null, 'folder-open-o', null, true, 140),
    new Menu (142, 'Level 3', null, null, 'folder-open-o', null, true, 141),
    new Menu (143, 'Level 4', null, null, 'folder-open-o', null, true, 142),
    new Menu (144, 'Level 5', null, null, 'folder-o', null, false, 143),
    */

    //REPORTES
    new Menu (227, 'Reportes', null, null, 'line-chart', null, true, 0),
    new Menu (233, 'Ventas', '/pages/report-sales', null, 'credit-card', null, false, 227),
    new Menu (228, 'Inventario', '/pages/report-inventory', null, 'list-ul', null, false, 227),
    new Menu (229, 'Citas', '/pages/report-appointments', null, 'calendar-check-o', null, false, 227),    
    new Menu (234, 'Citas en curso', '/pages/report-appointments-in-progress', null, 'clock-o', null, false, 227),  
    new Menu (235, 'Cierre', '/pages/report-close', null, 'check', null, false, 227),    
    new Menu (236, 'Dia', '/pages/report-day', null, 'calendar-times-o', null, false, 227),    
    new Menu (237, 'Ventas anticipadas', '/pages/report-coupons', null, 'undo', null, false, 227),   

    //CITAS
    new Menu (209, 'Citas', null, null, 'calendar', null, true, 0),
    new Menu (210, 'Ver Citas', '/pages/appointment-list', null, 'calendar-check-o', null, false, 209),
    new Menu (211, 'Crear Cita', '/pages/appointment-create', null, 'calendar-plus-o', null, false, 209),

    //ENTRADAS
    new Menu (230, 'Entradas', null, null, 'sort-amount-asc', null, true, 0),
    new Menu (231, 'Ver Entradas', '/pages/entry-list', null, 'list-ul', null, false, 230),
    new Menu (232, 'Crear Entradas', '/pages/entry-create', null, 'plus', null, false, 230),

    //SALIDAS
    new Menu (224, 'Salidas', null, null, 'shopping-cart', null, true, 0),
    new Menu (225, 'Ver Salidas', '/pages/transaction-list', null, 'list-ul', null, false, 224),
    new Menu (226, 'Crear Salida', '/pages/transaction-out-create', null, 'plus', null, false, 224), 

    //USUARIOS
    new Menu (200, 'Usuarios', null, null, 'users', null, true, 0),
    new Menu (201, 'Ver Usuarios', '/pages/user-list', null, 'users', null, false, 200),
    //new Menu (202, 'Crear Usuario', '/pages/user-create', null, 'user-plus', null, false, 200),

    //EMPLEADOS
    new Menu (203, 'Empleados', null, null, 'address-card', null, true, 0),
    new Menu (204, 'Ver Empleados', '/pages/employee-list', null, 'users', null, false, 203),
    //new Menu (205, 'Crear Empleado', '/pages/employee-create', null, 'user-plus', null, false, 203),    

    //CLIENTES
    new Menu (206, 'Clientes', null, null, 'handshake-o', null, true, 0),
    new Menu (207, 'Ver Clientes', '/pages/client-list', null, 'users', null, false, 206),
    new Menu (208, 'Crear Cliente', '/pages/client-create', null, 'user-plus', null, false, 206),

    //SUCURSALES
    new Menu (212, 'Sucursales', null, null, 'briefcase', null, true, 0),
    new Menu (213, 'Ver Sucurales', '/pages/subsidiary-list', null, 'list-ul', null, false, 212),
    //new Menu (214, 'Crear Sucursal', '/pages/subsidiary-create', null, 'plus', null, false, 212),

    //EMPRESAS
    new Menu (215, 'Empresas', null, null, 'building-o', null, true, 0),
    new Menu (216, 'Ver Empresas', '/pages/company-list', null, 'list-ul', null, false, 215),
    //new Menu (217, 'Crear Empresas', '/pages/company-create', null, 'plus', null, false, 215),

    //SERVICIOS
    new Menu (218, 'Servicios', null, null, 'thumbs-up', null, true, 0),
    new Menu (219, 'Ver Servicios', '/pages/service-list', null, 'list-ul', null, false, 218),
    new Menu (220, 'Crear Servicio', '/pages/service-create', null, 'plus', null, false, 218),

    //PRODUCTOS
    new Menu (221, 'Productos', null, null, 'dropbox', null, true, 0),
    new Menu (222, 'Ver Productos', '/pages/product-list', null, 'list-ul', null, false, 221),
    new Menu (223, 'Crear Producto', '/pages/product-create', null, 'plus', null, false, 221)   



    //EXTERNAL LINK
    //new Menu (200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]

export const horizontalMenuItems = [ 
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (40, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (43, 'Login', '/login', null, 'sign-in', null, false, 0),    
    new Menu (44, 'Register', '/register', null, 'registered', null, false, 0),
    new Menu (45, 'Blank', '/pages/blank', null, 'file-o', null, false, 40),
    new Menu (46, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 40),
    //new Menu (200, 'External Link', null, 'http://themeseason.com', 'external-link', '_blank', false, 0)
]