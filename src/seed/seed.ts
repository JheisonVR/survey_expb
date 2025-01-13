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

]