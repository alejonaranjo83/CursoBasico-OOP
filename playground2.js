// Texto de Platzi


// En este reto dada la siguiente clase:
// export class Course {
//     constructor({
//       name,
//       classes = [],
//     }) {
//       this.name = name;
//       this.classes = classes;
//     }
  
//     get name() {
//       // Tu código aquí 👈
//     }
  
//     set name(nuevoNombrecito) {
//       // Tu código aquí 👈
//     }
//   }



// Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

// Que sea de tipo string.
// Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
// Si no es un string no se cambia el valor de la propiedad name.
// La solución debería tener un input y output como los siguientes:

// Input

// const courseName = "curso de programación básica"
// const nombreMaysuculas = new Course({
//     name: courseName,
// })
// nombreMayusculas.name

// Output

// 'Curso de Programación Básica'


// export class Course {
class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      // Tu código aquí 👈
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      // Tu código aquí 👈
      if (typeof nuevoNombrecito !== "string" || nuevoNombrecito === " "){ // if the value is not a string or is empty, then...
        console.error("el nombre debe ser una string")
      } else {
        nuevoNombrecito = nuevoNombrecito.trim(); // eliminating possible empty spaces at the beggining or the end of the complete string 
        const words = nuevoNombrecito.split(" "); // words it´s an array that contains each word of the received argument, separated by a blank space
        const capitalized = words.map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }); //capitalized is an array that has all the elements from words, but with the first letter capitalized. In his interior, the "map()" method goes trough each element, takes the first letter of the word ("chartAt(0)""), converts it to capitol letter ("toUpperCase()"") and then join the rest of the word with the "slice" method
        this._name = capitalized.join(" ") //the "join" method joins all words separated by a space
      }
    }
  }




  // Input

const courseName = "curso de programación básica"
// const courseName = 123234234

const nombreMaysuculas = new Course({
    name: courseName,
})
nombreMayusculas._name

// Output

// 'Curso de Programación Básica'





// Errors from Platzi
// Should keep property name intact if is an empty string
// Should return the course title trimming empty spaces at beginning and ending



// SLN DE PLATZI
export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === "string") {
      nuevoNombrecito = nuevoNombrecito.trim()
      if (nuevoNombrecito.length !== 0) {
        let words = nuevoNombrecito.split(" ")
        let nuevoNombrecitoMayusculas = words.map((word) => {
          return word[0]?.toUpperCase() + word.substring(1);
        }).join(" ")
        this._name = nuevoNombrecitoMayusculas
      }
    }
  }
}