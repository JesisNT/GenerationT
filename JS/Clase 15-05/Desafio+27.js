let personas = [
        {nombre: 'Ana', edad: 28},
        {nombre: 'María', edad: 24},
        {nombre: 'José', edad: 31},
        {nombre: 'Juan Rodrigo Alberto García Blanco de los Valles XV', edad: 27},
];
let personasConMas27Anios = personas.filter(persona => persona.edad > 27);

console.log(personasConMas27Anios);