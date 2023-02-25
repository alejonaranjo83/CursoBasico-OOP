// Encapsulamiento con módulos de ECMAScript6

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com" + id;

    console.log("Se está reproduciendo desde la url " + urlSecreta)
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com" + id;

    console.log("Pausamos la url " + urlSecreta)
}

export class PlatziClass { //This class will be imported in other file: module.mjs
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    
    pausar() {
        videoStop(this.videoID);
    }
}
