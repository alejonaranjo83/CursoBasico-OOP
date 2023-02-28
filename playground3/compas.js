// Compa 1
import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student{

  constructor(props, skills = []) {
    super(props);
    this.skills = skills;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: `profesor de ${this.skills.join()}`
    });
    return comment.publicar();
  }
<code> 