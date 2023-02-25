
class Course {
    constructor({
        name,
    }) {
        this._name = name; //Pilar 2 = ENCAPSULAMIENTO. Llego a acuerdo con equipo para q no llamen ese atributo (los q tienen: _ ).
    }

    // continua encapsulamiento, usando "getters" y "setters". Creo un método para esto:
    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if(nuevoNombre === "Curso malo de programación básica") { //evitar q hagan esto
            console.error("Lo que intentas hacer no es posible");
        } else {
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de Programación Básica",
});

// Trabajando con getters y setters:
cursoProgBasica.name = "Curso gratis" //esto permite cambiar el nombre dle curso

cursoProgBasica.name = "Curso malo de programación básica" //no me permite hacer esto pues le puse restricción y me saca error