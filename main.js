// alert("checking that JS is working")

//Objeto literal:
const natalia = {
	name: "Natalia",
	age: 20,
	points: 700,
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
function Student(name, age, cursosAprobados) {
	this.name = name;
	this.age = age;
	this.cursosAprobados = cursosAprobados;

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
    ["Curso de Introducción a la Producción de Videojuegos", "Curso de Creación de Personajes"]
    );

juanita.aprobarCursos("Curso de Unreal Engine")

//Cuando creo una instancia de un prototipo, JS me muestra cosas diferentes a las q tiene un objeto literal. Esto lo veo desplegando "[[Prototype]]" en la consola.




// Hacer q un objeto literal aumente el contenido de sus propiedades. En este caso, un nuevo curso para natalia, si no existiera el método dentro del objeto:
natalia.cursosAprobados.push("Curso de Responsive Design");

// Pero si he creado un método dentro del objeto, lo hago así:
natalia.aprobarCursos("Curso de CSS Grid")

// Modificar valores dentro del objeto:
natalia.name = "Nath"
natalia.age += 1 //como si hubiera cumplido años