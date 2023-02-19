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




// Prototipos con la sintaxis de "clases"... en realidad son prototipos pero con una sintaxis más amigable para algunas personas.:

class Student2 { //Aquí creo la clase
    constructor(name, age, cursosAprobados, tipo) {//De esta manera debo especificar todos los parámetros q están en el constructor al crear un elemento
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

miguel.aprobarCurso("Curso de Tableau"); //Añado info a un atributo de la instancia creada previamente





// ROR: un patrón en programación q me permite recibir un objeto y retorna otro objeto a partir del mismo. Así puedo tener parámetros opcionales q no siempre tienen q tener todos los objetos.

class Student3 { //Aquí creo la clase con el patrón ROR
    constructor({ //Este es el objeto con los parámetros q tendrá el objeto
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







// APLICANDO VENTAJAS de POO:

// Si usara objetos literales, necesitaría muchas líneas de código difícil de escalar y hacer mantenimiento (hacer lo mismo cada vez q cree un objeto):
const alejo1 = {
    name: "Alejandro",
    username: "alejonaranjo83",
    points: 100,
    socialMedia: {
        twitter: "alejon",
        instagram: "alenara",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Introducción a la producción de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity",
            ]
        },
    ]
}

const jaime1 = {
    name: "Miguel",
    username: "miguelon",
    points: 8000,
    socialMedia: {
        twitter: "miguelon",
        instagram: "migueloni",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz",
                "Curso de Tableau",
            ]
        },
    ]
}

// En cambio, si uso POO, puedo transformar esos objetos en clases y ahí sí, crear instancias de esos prototipos. Al principio, para definir la clase me toma tiempo y espacio, pero después cuando creo instancias de la misma, todo fluye más rápido y con más control.
class StudentPOO {
    constructor({
        name,
        email,
        username,
        twitter = undefined, //esto es para q ese parámetro sea opcional
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

// Aquí incluso crearé las rutas de aprendizaje con sus cursos correspondientes a través de otra clase:
class learningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

// Creo las instancias de esa clase:
const escuelaWeb = new learningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
    ]
});


const escuelaData = new learningPath({
    name: "Escuela de Data Science",
    courses: [
        "Curso DataBusiness",
        "Curso DataViz",
        "Curso de Tableau",
    ],
});

const escuelaVgs = new learningPath({
    name: "Escuela de Videojuegos",
    courses: [
        "Curso de Introducción a la producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity",
    ],
});


// Aquí es donde uso todo lo creado previamente:
const alejo2 = new StudentPOO({
    name: "Alejandro",
    username: "alejonaranjo83",
    email: "alejon@email.com",
    twitter: "alejon",
    learningPaths: [
        escuelaWeb, //Aquí le estoy pasando la información de la otra clase que creé para las rutas de aprendizaje
        escuelaVgs,
    ]
})

const miguel2 = new StudentPOO({
    name: "Miguel",
    username: "miguelon",
    email: "miguel@email.com",
    instagram: "miguelon",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
})
