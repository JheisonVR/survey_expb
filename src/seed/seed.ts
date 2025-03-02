export interface Option {
    option: string;
    value: number;
}

export interface Question {
    question: string;
    options: Option[];
}

export interface Area {
    name: string;
    description: string;
    questions: Question[];
}

interface SeedData {
    options: Option[];
    questions: Question[];
    areas: Area[];
}

export const contactInfo:string = `
Direccion: calle 23 #72d-27 Bogotá Colombia
Horario: Lunes a viernes 9:00am a 6:00pm
Telefono: +57 333 2873478
Email: Natalia.laverde@exportbrandll.com
`

export const countries = [
    { region: "Africa", pais: "Sudáfrica", indicativo: "+27" },
    { region: "Africa", pais: "Nigeria", indicativo: "+234" },
    { region: "Africa", pais: "Egipto", indicativo: "+20" },
    { region: "Africa", pais: "Kenia", indicativo: "+254" },
    { region: "Africa", pais: "Argelia", indicativo: "+213" },
    { region: "Asia", pais: "China", indicativo: "+86" },
    { region: "Asia", pais: "India", indicativo: "+91" },
    { region: "Asia", pais: "Japón", indicativo: "+81" },
    { region: "Asia", pais: "Corea del Sur", indicativo: "+82" },
    { region: "Asia", pais: "Indonesia", indicativo: "+62" },
    { region: "Europa", pais: "Alemania", indicativo: "+49" },
    { region: "Europa", pais: "Reino Unido", indicativo: "+44" },
    { region: "Europa", pais: "Francia", indicativo: "+33" },
    { region: "Europa", pais: "Italia", indicativo: "+39" },
    { region: "Europa", pais: "España", indicativo: "+34" },
    { region: "América del Norte", pais: "Estados Unidos", indicativo: "+1" },
    { region: "América del Norte", pais: "Canadá", indicativo: "+1" },
    { region: "América del Norte", pais: "México", indicativo: "+52" },
    { region: "América Central y el Caribe", pais: "Costa Rica", indicativo: "+506" },
    { region: "América Central y el Caribe", pais: "Panamá", indicativo: "+507" },
    { region: "América Central y el Caribe", pais: "Cuba", indicativo: "+53" },
    { region: "América Central y el Caribe", pais: "República Dominicana", indicativo: "+1-809" },
    { region: "América Central y el Caribe", pais: "Puerto Rico", indicativo: "+1-787" },
    { region: "América del Sur", pais: "Argentina", indicativo: "+54" },
    { region: "América del Sur", pais: "Brasil", indicativo: "+55" },
    { region: "América del Sur", pais: "Chile", indicativo: "+56" },
    { region: "América del Sur", pais: "Colombia", indicativo: "+57" },
    { region: "América del Sur", pais: "Perú", indicativo: "+51" },
    { region: "Oceanía", pais: "Australia", indicativo: "+61" },
    { region: "Oceanía", pais: "Nueva Zelanda", indicativo: "+64" },
    { region: "Oceanía", pais: "Fiyi", indicativo: "+679" },
    { region: "Oceanía", pais: "Papúa Nueva Guinea", indicativo: "+675" },
    { region: "Oriente Medio", pais: "Arabia Saudita", indicativo: "+966" },
    { region: "Oriente Medio", pais: "Israel", indicativo: "+972" },
    { region: "Oriente Medio", pais: "Emiratos Árabes Unidos", indicativo: "+971" },
    { region: "Oriente Medio", pais: "Irak", indicativo: "+964" },
    { region: "Oriente Medio", pais: "Qatar", indicativo: "+974" }
];

export const initialData: SeedData = {
    options: [
        { option: 'Si', value: 3 },
        { option: 'En Proceso', value: 2 },
        { option: 'No', value: 1 },
    ],
    questions:[
        {
            question: "¿Tiene definida la forma de entrada al mercado internacional (distribuidor, directo, etc.)?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        },
        {
            question: "¿La empresa conoce las condicones de acceso al pais destino?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        },
        {
            question: "¿Tiene identificado el público objetivo en el mercado internacional?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        },
        {
            question: "¿Ha investigado competidores en el mercado de destino?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        },
        {
            question: "¿La empresa tiene conocimiento y maneja los términos de negociación internacional INCOTERMS?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        },
        {
            question: "¿La empresa cuenta con acuerdos o contratos estándar para sus distribuidores a nivel internacional?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        },
        {
            question: "¿Tiene definido la oferta exportadora de el producto y/o servicio?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        },
        {
            question: "¿La empresa tiene claro cual es el codigo arancelario de su producto?",
            options: [
                { option: 'Si', value: 3 },
                { option: 'En Proceso', value: 2 },
                { option: 'No', value: 1 },
            ]
        } 
    ],
    areas: 
    [
        
        {name: "Area 1",
        description: "Estrategia Comercial Internacional",
        questions:[ 
            {
            question: "¿Tiene definida la forma de entrada al mercado internacional (distribuidor, directo, etc.)?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿La empresa conoce las condicones de acceso al pais destino?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
            {
            question: "¿Tiene identificado el público objetivo en el mercado internacional?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
            {
            question: "¿Ha investigado competidores en el mercado de destino?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
            {
            question: "¿La empresa tiene conocimiento y maneja los términos de negociación internacional INCOTERMS?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
            {
            question: "¿La empresa cuenta con acuerdos o contratos estándar para sus distribuidores a nivel internacional?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
            {
            question: "¿Tiene definido la oferta exportadora de el producto y/o servicio?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
            {
            question: "¿La empresa tiene claro cual es el codigo arancelario de su producto?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
            {
            question: "¿Conoce los costos logísticos hasta el cliente final?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1},
            ]},
        ]},
        {name: "Area 2",
        description: " Portafolio",
        questions:[ 
            {
            question: "¿El portafolio está adaptado a las necesidades del mercado internacional?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿Ha identificado los códigos arancelarios de los productos que exportará?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿Cuenta con certificaciones o normas exigidas en el país de destino?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿Tiene claridad sobre los márgenes de rentabilidad para exportar?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
        ]},
        {name: "Area 3",
        description: "Costo de su Producto",
        questions:[ 
            {
            question: "¿Dispone de un equipo capacitado para negociar con clientes internacionales?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿Cuenta con una estrategia de marketing digital adaptada al mercado objetivo?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿Ha diseñado un funnel de ventas para captar y convertir leads internacionales?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿Tiene prospectos o aliados potenciales identificados en el mercado de destino?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
            {
            question: "¿La empresa a desarrollado campañas a nivel digital en mercados internacionales?",
            options: [
                {option: 'Si', value:3}, 
                {option:'En Proceso', value:2}, 
                {option:'No', value:1}, 
            ]},
        ]},
    ]
}

export const data: Area[] = 
[
    {name: "Area 1",
    description: "Estrategia Comercial Internacional",
    questions:[ 
        {
        question: "¿Tiene definida la forma de entrada al mercado internacional (distribuidor, directo, etc.)?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿La empresa conoce las condicones de acceso al pais destino?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
        {
        question: "¿Tiene identificado el público objetivo en el mercado internacional?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
        {
        question: "¿Ha investigado competidores en el mercado de destino?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
        {
        question: "¿La empresa tiene conocimiento y maneja los términos de negociación internacional INCOTERMS?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
        {
        question: "¿La empresa cuenta con acuerdos o contratos estándar para sus distribuidores a nivel internacional?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
        {
        question: "¿Tiene definido la oferta exportadora de el producto y/o servicio?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
        {
        question: "¿La empresa tiene claro cual es el codigo arancelario de su producto?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
        {
        question: "¿Conoce los costos logísticos hasta el cliente final?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1},
        ]},
    ]},
    {name: "Area 2",
    description: "Portafolio",
    questions:[ 
        {
        question: "¿El portafolio está adaptado a las necesidades del mercado internacional?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿Ha identificado los códigos arancelarios de los productos que exportará?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿Cuenta con certificaciones o normas exigidas en el país de destino?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿Tiene claridad sobre los márgenes de rentabilidad para exportar?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
    ]},
    {name: "Area 3",
    description: "Costo de su Producto",
    questions:[ 
        {
        question: "¿Dispone de un equipo capacitado para negociar con clientes internacionales?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿Cuenta con una estrategia de marketing digital adaptada al mercado objetivo?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿Ha diseñado un funnel de ventas para captar y convertir leads internacionales?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿Tiene prospectos o aliados potenciales identificados en el mercado de destino?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
        {
        question: "¿La empresa a desarrollado campañas a nivel digital en mercados internacionales?",
        options: [
            {option: 'Si', value:3}, 
            {option:'En Proceso', value:2}, 
            {option:'No', value:1}, 
        ]},
    ]},
]

/*
export const data: Area[] = 
[
    {name: "Area 1",
    description: "Estrategia Comercial Internacional",
    questions:[ 
        {
        question: "¿La empresa tiene definida la forma de entrada comercial?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con un pronóstico de ventas internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene claramente definido el P&G comercial de la empresa.?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
    ]},
    {name: "Area 2",
    description: " Portafolio",
    questions:[ 
        {
        question: "¿La empresa cuenta con un portafolio claro de productos / servicios para la exportación?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa ha identificado el código arancelario de su producto / servicio?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con fichas técnicas (protocolos de garantia) de sus productos y/o servicios?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿Su portafolio esta geolocalizado para cada mercado (etiquetas)?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con una marca registrada de sus productos / servicios en mercados internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},    
    ]},
    {name: "Area 3",
    description: "Costo de su Producto",
    questions:[ 
        {
        question: "¿La empresa tiene un proceso para administrar los costos asociados a la producción, comercialización y distribución de los productos ó servicios?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa adecua la comercialización del producto ó servicio según los diferentes segmentos de clientes?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa ha identificado las variables que inciden en el costo de su producto / servicio?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene un proceso para presupuestar los costos asociados a la exportación de su producto ó servicio?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa ha asignado un precio a su producto de acuerdo con su posicionamiento?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},    
    ]},
    {name: "Area 4",
    description: "Herramientas para Vender",
    questions:[ 
        {
        question: "¿La empresa tiene catálogos o brochures de su producto/ servicio para los mercados?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene presentaciones multimedia (video, power point, flash, etc) de su oferta?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con metodología para gestió de sus clientes (CRM) sobre su producto ó servicio?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene definido los argumentos de venta por producto/ servicio?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},    
    ]},
    {name: "Area 5",
    description: "Clientes",
    questions:[ 
        {
        question: "¿La empresa tiene una descripción clara de su cliente típico por mercado?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con mecanismos para identificar oportunidades comerciales a nivel internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene una base de datos actualizada y confiable de los clientes potenciales internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene buen conocimiento de la posición y modelo de precios de la competencia al mercado?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa ha realizado trabajo de campo de inteligencia comercial al mercado y lo tiene documentado al mercado a incursionar?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},    
        {
        question: "¿La empresa tiene definido una metodología para manejo de clientes internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},   
    ]},
    {name: "Area 6",
    description: "Proceso Logístico Internacional",
    questions:[ 
        {
        question: "¿La empresa tiene conocimiento y maneja los términos de negociación internacional INCOTERMS?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa conoce y maneja los sistemas más adecuados de transporte y distribución de su producto en el ámbito internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿Se ha identificado el impacto de los costos logísticos en el resultado de la operación del negocio a nivel internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
    ]},
    {name: "Area 7",
    description: " Distribuidores",
    questions:[ 
        {
        question: "¿La empresa tiene un programa establecido para desarrollar sus distribuidores internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con acuerdos o contratos estándar para sus distribuidores a nivel internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con programas de capacitación en ventas y material de soporte para sus distribuidores a nivel internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
    ]},
    {name: "Area 8",
    description: "Condiciones de Acceso",
    questions:[ 
        {
        question: "¿La empresa cuenta con capacidad productiva para atender mercados internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿Se han definido procesos para asegurar que el producto ó servicio cumpla con los requisitos técnicos de orden internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿Los productos / servicios de la empresa cuentan con certificaciones que los respalde en el mercado internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿El producto cuenta con un empaque adecuado para su comercialización?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa ha identificado las exigencias para su producto / servicio en los mercados internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},    
        {
        question: "¿La empresa tiene un plan para asegurar la calidad de sus productos ó servicios en el mercado internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},   
    ]},
    {name: "Area 9",
    description: "Activos Digitales",
    questions:[ 
        {
        question: "¿La empresa cuenta con una página en Internet para responder a las necesidades específicas de su mercado objetivo?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿El diseño de la página web  transaccion internacional  (pueden los clientes comprar y obtener soporte de ella) de nuestro mercado objetivo?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con presencia digital activa?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La emrpesa tiene un plan digital para posicionar, atraer y fidelizar clientes?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene un proceso a través de Internet para realizar una revisión periódica de las ventajas y desventajas de la competencia?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},    
    ]},
    {name: "Area 10",
    description: "Estructura Comercial",
    questions:[ 
        {
        question: "¿La fuerza de ventas/ persona relacionada con la comercialización tiene experiencia internacional?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta actualmente con un flujograma del proceso de venta. (Tiene claramente identificado el ciclo de venta del producto o servicio)?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene dentro de su estrategia participar en eventos comerciales en el mercado a incursonar?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa tiene una estrategia de atracción de clientes internacionales?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
        {
        question: "¿La empresa cuenta con programas que soporten administrativamente la comercialización de sus productos / servicios?",
        options: [
            {option: 'Si lo tiene y está consolidado', value:4}, 
            {option:'Está en proceso de implementación', value:3}, 
            {option:'Se está promoviendo su realización en el corto plazo', value:2}, 
            {option:'No se ha realizado',value:1}
        ]},
    ]},
]
*/