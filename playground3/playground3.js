// Dentro de este reto encuentras las clases Student y Comment con un código base, recuerda ir a verlas en el sistema de archivos.

// Tu reto consisten en:

// Hacer que la clase TeacherStudent herede de Student
// Agrega un propiedad dCooe tipo Array llamada skills a la clase TeacherStudent.
// Sobrescribir el método publicarComentario dentro de TeacherStundent.
// Debe agregar el array de skills en su la propiedad studentRole de la clase Comment.
// El string debe verse de la siguiente manera "profesor de skill1, skill2".
// Input

//   const skills = ["js", "python", "mongodb"]
//   const props = {
//     name: "Erik Ochoa",
//     username: "elyager"
//   }

//   const profesor = new TeacherStudent(props, skills)
//   profesor.publicarComentario('Mi primer comentario')

// Output

// {
//   "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
//   "likes":"0 likes",
//   "content":"Mi primer comentario"
// }



// In order to use this script, is necessary to use the ".mjs" file system (I think). By the way that is presented in the following lines, works on the Platzi platform.

import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student { // "TeacherStudent" inherits from "Student"
  constructor(props, skills = []) { // "props" inherits all the arguments from "Student" and "skills" is an array created only for the class "TeacherStudent"
    super(props);
    this.skills = skills;
  }

  publicarComentario(commentContent) { // this method is going to be re-writted
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: `profesor de ${this.skills.join(`,`)}`, // the "skills" array will be added to the "studentRole" property of the "Comment" class
    });
    return comment.publicar();
  }
}



//   Input
const skills = ["js", "python", "mongodb"]
const props = {
  name: "Erik Ochoa",
  username: "elyager"
}

const profesor = new TeacherStudent(props, skills)
profesor.publicarComentario('Mi primer comentario')