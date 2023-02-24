// Dadas la siguientes clases:

// Clase Banda con las propiedades:

// nombre - string
// generos - Array
// integrantes - Array
// Crea una clase llamada "Integrante" con las propiedades:

// nombre - string
// instrumento - string
// Escribe la lógica para agregar integrantes a la clase Banda en la función agregarIntegrante. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un integrante con instrumento "Bateria".

// La solución debería tener un input y output como los siguientes:

// Input

//   const data = {
//     nombre: "Los Jacks",
//     generos: ["rock", "pop", "post-punk"],
//     integrantes: [],
//   }
//   const banda = new Banda(data)
//   banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
//   banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))

// Output

// {
//   "nombre":"Los Jacks",
//   "generos":["rock","pop","post-punk"],
//   "integrantes":[
//     {"nombre":"Erik","instrumento":"Guitarra"},
//     {"nombre":"Paul","instrumento":"Bateria"}
//   ]}




class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      // Opción resuelta en conjunto con ChatGPT3:
      const instrumentos = this.integrantes.map(integrante => integrante.instrumento); //crear un array con los instrumentos existentes en la banda
      // La sintaxis "i => i.algo" es una fxn flecha (arrow function). Es una forma abreviada de declarar una fxn anónima. En el caso de esta explicación, la arrow function toma un argumento "i" y devuelve la propiedad "algo" del objeto "i"

      if(!instrumentos.includes(integranteNuevo.instrumento)){ //agregar integrante nuevo siempre y cuando el instrumento que toque no esté contenido en el array de instrumentos de los integrantes que ya están en la banda
        this.integrantes.push(integranteNuevo);
        console.log(`${integranteNuevo.nombre} bienvenido a nuestra banda! Te esperamos para empezar a ensayar. No olvides trae tu propi@ ${integranteNuevo.instrumento}`);
      } else {
        console.log(`${integranteNuevo.nombre} lo sentimos, pero ya tenemos otra persona que toca ${integranteNuevo.instrumento}. Te avisaremos si te necesitamos en otro momento!`)
      }
    }
  }
  
  //Crear clase Integrante
class Integrante {
  constructor({
      nombre,
      instrumento,
  }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
  }
}
  
  
  // export {
  //   Banda,
  //   Integrante,
  // }



// Inputs para utilizar las clases:
const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
}

const banda = new Banda(data)

banda.agregarIntegrante(new Integrante({
  nombre: "Erik", 
  instrumento: "Guitarra" 
}))

banda.agregarIntegrante(new Integrante({ 
  nombre: "Paul", 
  instrumento: "Bateria" 
}))

banda.agregarIntegrante(new Integrante({ 
  nombre: "Ricky", 
  instrumento: "Bajo" 
}))

banda.agregarIntegrante(new Integrante({ 
  nombre: "Leo", 
  instrumento: "Bateria" 
}))

banda.agregarIntegrante(new Integrante({ 
  nombre: "Arnoldo", 
  instrumento: "Flauta" 
}))



// Complemento personal para entender cómo fxna la clase y en qué se diferencia de obj. literal
// const data2 = {
//     nombre: "Los Cachirulos",
//     generos: ["tecno-cumbia", "merecumbe", "perreo filarmónico"],
//     integrantes: [],
// }
// const banda2 = new Banda(data)







// Consulta para ChatGPT3:
// Crea una clase que se llame "Banda" al interior de la cual hay tres llaves: "nombre", "generos" e "integrantes". Tanto "generos" como "integrantes", son arrays vacíos.

// Incluye un método dentro de la clase creada anteriormente, a través del cual pueda agregar un integrante a la banda. Ese método se debe llamar "agregarIntegrante" y lleva como argumento "integranteNuevo".

// Crea una clase independiente de la anterior llamada "Integrante", a través de la cual pueda crear un objeto para cada integrante. Dicha clase debe tener las siguientes dos llaves: "nombre" e "instrumento".

// Haz que antes de agregar un integrante al array de "integrantes", se verifique si el instrumento que toca el integrante que se quiere agregar ya está contenido en el array. Si el instrumento del integrante no hace parte del array, quiere decir que ese integrante puede añadirse; en cambio, si hay un integrante que tiene ese mismo instrumento, no se debe poder agregar el integrante que toca el mismo instrumento.