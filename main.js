// alert("checking that JS is working")

//Objeto literal:
const natalia = {
	name: "Natalia",
	age: 20,
	points: 700,
    tipo: "Objeto literal",
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    // Método dentro de objeto
    aprobarCursos(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

//Prototipo:
function Student(name, age, cursosAprobados, tipo) {
	this.name = name;
	this.age = age;
	this.cursosAprobados = cursosAprobados;
    this.tipo = tipo;

    // Método dentro del prototipo
    this.aprobarCursos = function(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

// El método q tengo dentro del prototipo, lo puedo crear también desde afuera de la siguiente manera:
// Student.prototype.aprobarCurso = function(nuevoCurso) {
//     this.cursosAprobados.push(nuevoCurso);
// }

//Creo una instancia de la clase llamando al prototipo con la palabra reservada "new"
const juanita = new Student(
    "Juana de Arco",
    15,
    ["Curso de Introducción a la Producción de Videojuegos", "Curso de Creación de Personajes"],
    "Instancia de clase"
    );

// Pese a q la instancia ya se creo, puedo usar el método contenido en su interior para introducir info.
juanita.aprobarCursos("Curso de Unreal Engine")

//Cuando creo una instancia de un prototipo, JS me muestra cosas diferentes a las q tiene un objeto literal. Esto lo veo desplegando "[[Prototype]]" en la consola.




// Hacer q un objeto literal aumente el contenido de sus propiedades. En este caso, un nuevo curso para natalia, si no existiera el método dentro del objeto:
natalia.cursosAprobados.push("Curso de Responsive Design");

// Pero si he creado un método dentro del objeto, lo hago así:
natalia.aprobarCursos("Curso de CSS Grid")

// Modificar valores dentro del objeto:
natalia.name = "Nath"
natalia.age += 1 //como si hubiera cumplido años




// Prototipos con la sintaxis de "clases"... en realidad son prototipos pero con una sintaxis más amigable:

class Student2 { //Aquí creo la clase
    constructor(name, age, cursosAprobados, tipo) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.tipo = tipo;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguel = new Student2( //Aquí creo una instancia de esa clase
    "Miguel",
    28,
    ["Curso de Análisis de Negocios para Ciencia de Datos", 
    "Curso de Principios de visualización de Datos para BI"
    ],
    "Instancia de clase con sintaxis de clase"
) 

miguel.aprobarCurso("Curso de Tableu"); //Añado info a un atributo de la instancia creada previamente





// ROR: un patrón en programación q me permite recibir un objeto y crear otro a partir del mismo. Así puedo tener parámetros opcionales q no siempre tienen q tener todos los objetos.

class Student3 { //Aquí creo la clase con el patrón ROR
    constructor({
        name, 
        age, 
        cursosAprobados = [], //Puedo definir valores por defecto, en este caso un array vacío
        tipo,
        email,
        facebook,
        twitter,
        instagram,
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.tipo = tipo;
        this.email = email;
        this.facebook = facebook;
        this.twitter = twitter;
        this.instagram = instagram;
    }
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

// Por usar ROR puedo enviar parámetros en desorden o incluso no enviar todos los q tiene la clase
const jacinto = new Student3({
    email: "jacintopolis@email.com",
    age: 37,
    name: "Jacinto",
    tipo: "Instancia con ROR",
    // cursosAprobados: [
    //     "Curso básico de Javascript",
    //     "Curso práctica de Javascript",
    // ]
})