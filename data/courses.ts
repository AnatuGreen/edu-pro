// src/data/courses.ts

// export interface Course {
//     id: number;
//     name: string;
//     description: string;
//     instructor: string;
//     students: number;
//     image: string;
//   }

const courses = [
    {
      id: 1,
      name: 'Intro to HTML',
      description: 'Description for Course 1',
      instructor: 'Oluwadamilola Gbemi',
      students: 100,
      image: '/images/woman-with-ar-glass.webp',
      intro: 'Intro to HTML. \n Learn the building blocks of web development with HTML.',
      detail: "In this course, you will learn the fundamental principles of HyperText Markup Language (HTML), the backbone of web development. Through hands-on exercises, you will understand how to structure content, create links, incorporate images, and build the foundation for any web page."
    },
    {
      id: 2,
      name: 'Intro to CSS',
      description: 'Description for Course 2',
      instructor: 'Mustapha Mufasa',
      students: 80,
      image: '/images/man-coding.jpg',
      intro: 'Intro to CSS. Discover the art of styling web pages with CSS.',
      detail: 'This course will introduce you to Cascading Style Sheets (CSS) and its vital role in web design. You will explore various styling techniques, including layout, colors, typography, and responsive design. By the end, you will have the skills to transform plain HTML into visually engaging and polished websites.'
    },
    {
      id: 3,
      name: 'Intro to JavaScript',
      description: 'Description for Course 2',
      instructor: 'Anatu Green',
      students: 85,
      image: '/images/study-group-african-people.jpg',
      intro: "Intro to Javascript. Dive into the dynamic world of web programming with JavaScript.",
      detail: 'In this comprehensive course, you will delve into the world of JavaScript, a versatile programming language that enables dynamic interactions on the web. You will learn about variables, functions, conditionals, loops, and the Document Object Model (DOM), empowering you to create interactive and user-friendly web applications.'
    },
    {
      id: 4,
      name: 'Intro to React JS',
      description: 'Description for Course 2',
      instructor: 'Mercy Iroh',
      students: 90,
      image: '/images/woman-in-tech.jpg',
      intro: 'Intro to React JS. Explore the power of building interactive user interfaces with React JS.',
      detail: "This course will guide you through the popular JavaScript library, React JS, which enables the creation of powerful and efficient user interfaces. You will learn about components, states, props, and how to manage the application's state effectively. By building real-world projects, you will gain the expertise to design dynamic and responsive web applications using React JS."
    },
    // Add more dummy courses if needed
  ];

  export default courses;
