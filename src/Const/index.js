import {
  Screenshot2,
  mobile,
  backend,
  creator,
  web,
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  student,
  tripguide,
  threejs,
  Nextjs,
  Screenshot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "nextjs",
    icon: Nextjs,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Meraki Corner",
    description:
      "The Meraki Corner is an E-commerce app comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Nextjs",
        color: "White",
      },
      {
        name: "TailwindCss",
        color: "White",
      },
      {
        name: "Firebase",
        color: "White",
      },
      {
        name: "Redux",
        color: "White",
      },
    ],
    image: Screenshot2,
    source_code_link: "https://github.com/Suyash1855/Meraki-Corner",
    live_link: "https://meraki-corner.vercel.app/",
  },
  {
    name: "Sudoku Solver",
    description:
      "The Sudoku Solver is a web application which provides a user-friendly interface for solving Sudoku puzzles. It works on the algorithm based on back tracking and recursion.",
    tags: [
      {
        name: "HTML",
        color: "White",
      },
      {
        name: "CSS",
        color: "White",
      },
      {
        name: "JavaScript",
        color: "White",
      },
    ],
    image: Screenshot,
    source_code_link: "https://github.com/Suyash1855/SudokuSolver",
    live_link: "https://sudoku-solver-53bd7.web.app/",
  },
  {
    name: "Student Record Portal",
    description:
      "Python based application which allows the user to fetch the details of the registered student. The data is stored in the SQL database.",
    tags: [
      {
        name: "Python",
        color: "White",
      },
      {
        name: "CTkinter",
        color: "White",
      },
      {
        name: "SQL",
        color: "White",
      },
    ],
    image: student,
    source_code_link: "https://github.com/Suyash1855/StudentRecordPortal",
    live_link: "https://sudoku-solver-53bd7.web.app/",
  },
];

export { services, technologies, testimonials, projects };
