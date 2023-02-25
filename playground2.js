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
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      // Tu código aquí 👈
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      // Tu código aquí 👈
      if (typeof nuevoNombrecito === `string`){
        this._name = nuevoNombrecito
      } else {
        console.error("el nombre debe ser una string")
      }
    }
  }




  // Input

const courseName = "curso de programación básica"
// const courseName = 123234234

const nombreMaysuculas = new Course({
    name: courseName,
})
nombreMayusculas.name

// Output

// 'Curso de Programación Básica'