// Code from class 9 onwards
// Four pillars of object-oriented programming

// ABSTRACCION: me evita tener q repetir cosas

// Pueden haber cosas que se repitan, por lo cual crearé clases para cada cosa
class Course {
    constructor({
        name,
        description,
        teacher,
        lessons = [],
        comments = [],
    }) {
        this.name = name;
        this.description = description;
        this.teacher = teacher;
        this.lessons = lessons;
        this.comments = comments;
    }
}

class Teacher {
    constructor({
        name,
        bio,
        id,
    }) {
        this.name = name;
        this.bio = bio;
        this.id = id;
    }
}

class Lesson {
    constructor({
        lessonName,
        lessonIndex,
    }) {
        this.lessonName = lessonName;
        this.lessonIndex = lessonIndex
    }
}

class Comment {
    constructor({
        commentID,
        commentContent,
    }) {
        this.commentID = commentID;
        this.commentContent = commentContent;
    }
}



// Utilizo las clases creadas previamente, para crear objetos que posteriormente harán parte de otros objetos:

const freddyV = new Teacher({
    name: "Freddy Vega",
    bio: "Pendiente de generar descripción en su biografía",
    id: "freVeg",
})

const diegoDG = new Teacher({
    name: "Diego de Granda",
    bio: "Pendiente de generar descripción en su biografía",
    id: "dieDG",
})

const orlandoN = new Teacher({
    name: "Orlando Naipes",
    bio: "Pendiente de generar descripción en su biografía",
    id: "orlNai",
})

const jacintoC = new Teacher({
    name: "Jacinto Cuevas",
    bio: "Pendiente de generar descripción en su biografía",
    id: "jaCu",
})

const germCar = new Teacher({
    name: "German Carvajal",
    bio: "Pendiente de generar descripción en su biografía",
    id: "geCar",
})

const paoTri = new Teacher({
    name: "Paola Triana",
    bio: "Pendiente de generar descripción en su biografía",
    id: "paTri",
})

const marceRod = new Teacher({
    name: "Marcela Rodriguez",
    bio: "Pendiente de generar descripción en su biografía",
    id: "maRo",
})

const l1 = new Lesson({
    lessonName: "Lesson A",
    lessonIndex: "01",
})

const l2 = new Lesson({
    lessonName: "Lesson B",
    lessonIndex: "02",
})

const l3 = new Lesson({
    lessonName: "Lesson C",
    lessonIndex: "03",
})

const l4 = new Lesson({
    lessonName: "Lesson D",
    lessonIndex: "04",
})

const l5 = new Lesson({
    lessonName: "Lesson E",
    lessonIndex: "05",
})

const l6 = new Lesson({
    lessonName: "Lesson F",
    lessonIndex: "06",
})


const c1 = new Comment({
    commentID: "positive comment",
    commentContent: "This a wonderful course",
})

const c2 = new Comment({
    commentID: "fair comment",
    commentContent: "This course is ok to learn",
})

const c3 = new Comment({
    commentID: "bad comment",
    commentContent: "I didn´t like this course at all",
})




// Creo una instancia de la clase (un objeto) para evitar la repetición y facilitar mantenimiento.
const cursoProgBasica = new Course({
    name: "Curso gratis de Programación Básica",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, veniam? Dolor, repudiandae iste! Minima quae sapiente labore veritatis sed ullam, ut sit corrupti saepe eligendi reprehenderit consectetur veniam hic non.",
    teacher: freddyV,
    lessons: [l1, l2 , l3],
    comments: [c1, c3, c2],
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    description: "Vel culpa dolorem quidem quas laudantium sequi sit excepturi odit molestiae perspiciatis omnis nesciunt aut ut tempora aperiam autem qui adipisci beatae at voluptatibus iusto neque, quaerat illo vero? Incidunt.",
    teacher: diegoDG,
    lessons: [l1, l2 , l3, l4, l5, l6],
    comments: [c1, c1, c2],
})

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    description: "Architecto eius repudiandae neque, praesentium perferendis veniam iusto? Ab, architecto beatae distinctio nisi pariatur modi eligendi qui asperiores sapiente velit adipisci soluta mollitia veritatis voluptas numquam, sint nesciunt ullam temporibus.",
    teacher: diegoDG,
    lessons: [l1, l2 , l3, l4, l5],
    comments: [c2, c2, c2],
})

const cursoResponsive = new Course({
    name: "Curso de Responsive Design",
    description: "Nam laudantium itaque eaque atque ad, esse fugiat commodi. Odit voluptas in dignissimos, voluptatibus, inventore incidunt esse minima repellat est quod quae, qui accusantium libero nostrum. Necessitatibus incidunt nulla officiis.",
    teacher: diegoDG,
    lessons: [l1, l2],
    comments: [c2, c1, c3],
})

const cursoDataBus = new Course({
    name: "Curso DataBusiness",
    description: "Ipsam repellendus rem suscipit magnam provident nulla! Enim, quod veniam. Nam maiores beatae maxime dicta eos vero repellat repellendus voluptas molestiae! Alias recusandae, adipisci perspiciatis at delectus dolores molestiae! Quia!",
    teacher: orlandoN,
    lessons: [l1, l2 , l3, l4],
    comments: [c3, c3, c3],
})

const cursoDataViz = new Course({
    name: "Curso DataViz",
    description: "Assumenda repellendus nobis ullam eligendi numquam expedita suscipit maxime mollitia corporis aspernatur earum perspiciatis autem dolorum magni odio ab iusto a quos dignissimos, magnam consectetur laborum explicabo libero aliquid? In.",
    teacher: orlandoN,
    lessons: [l1, l2 , l3, l4, l5, l6],
    comments: [c2, c3, c2],
})

const cursoTableau = new Course({
    name: "Curso de Tableau",
    description: "Quod optio numquam libero ex suscipit cum nobis doloremque ullam. Ratione aperiam fuga, error cum soluta rerum atque beatae numquam eum magnam laboriosam mollitia nostrum molestiae est! Non, laborum voluptas.",
    teacher: jacintoC,
    lessons: [l1, l2 , l3],
    comments: [c1, c1, c2],
})

const cursoIntroProdVidJ = new Course({
    name: "Curso de Introducción a la producción de Videojuegos",
    description: "Laborum itaque libero voluptatum ea quia harum adipisci ullam minima autem! Illum aut culpa laboriosam delectus voluptates, repellat repudiandae impedit adipisci asperiores enim nihil temporibus dolorem consequatur libero sapiente eveniet.",
    teacher: germCar,
    lessons: [l1, l2 , l3, l4, l5, l6],
    comments: [c1, c1, c1],
})

const cursoUnreal = new Course({
    name: "Curso de Unreal Engine",
    description: "Velit maiores sapiente assumenda doloremque perferendis quisquam, facilis alias dignissimos doloribus ipsam dolores qui exercitationem distinctio ad aliquam officia, deleniti aliquid, eum laudantium accusamus veritatis earum possimus quam? Odio, sit?",
    teacher: paoTri,
    lessons: [l1, l2 , l3],
    comments: [c1, c3, c2],
})

const cursoUnity = new Course({
    name: "Curso de Unity",
    description: "Deserunt, voluptatum consectetur? Earum ipsum ex obcaecati! Quo, inventore. Cumque sapiente officia recusandae reiciendis facilis ab voluptates doloremque illo amet dolore eius magni, aperiam repellat, error vitae molestiae rem fugit!",
    teacher: marceRod,
    lessons: [l1, l2 , l3, l4, l5],
    comments: [c2, c2, c1],
})


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
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        cursoResponsive,
    ]
});

const escuelaData = new learningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDataBus,
        cursoDataViz,
        cursoTableau,
    ],
});

const escuelaVgs = new learningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        cursoIntroProdVidJ,
        cursoUnreal,
        cursoUnity,
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