import { source } from "framer-motion/client";
import {
  mongodb,
  react,
  nodejs,
  docker,
  css,
  javascript,
  sqlserver,
  csharp,
  bootstrap,
  html,
  mysql,
  netcore,
  assessment1,
  assessment2,
  finalProject,
  foodReCipes,
} from "../assets";
import { color } from "framer-motion";

const education = [];
const projects = [
  {
    name: "Food Recipes Website",
    description:
      "A responsive front-end web application using React, Vite, and Tailwind CSS, search for recipes based on ingredients, dietary preferences, and categories.",
    tags: [
      {
        name: "ReactJS",
        color: "text-blue-500",
      },
      {
        name: "Vite",
        color: "text-green-500",
      },
      {
        name: "TailwindCSS",
        color: "text-purple-500",
      },
    ],
    image: foodReCipes,
    source_code_link: "https://github.com/barrera77/SODV1253-assignment-2.git",
    demo_link: "https://sodv-1253-assignment-2.vercel.app/",
  },
  /* {
    name: "Airline Ticket Reservation",
    description:
      "A full stack application simulating an airline ticket reservation site using mainly NodeJS, ExpressJS, and MSSQL.",
    tags: [
      {
        name: "nodeJS",
        color: "text-blue-500",
      },
      {
        name: "ExpressJS",
        color: "text-green-500",
      },
      {
        name: "MSSQL",
        color: "text-purple-500",
      },
    ],
    image: finalProject,
    source_code_link: "https://github.com/barrera77/sodv1251-final-project.git",
    demo_link: "https://sodv1251-final-project-latest.onrender.com",
  }, */
  {
    name: "Event Management System",
    description:
      "A full stack application for managing events using mainly NodeJS, ExpressJS, and MongoDB",
    tags: [
      {
        name: "nodeJS",
        color: "text-blue-500",
      },
      {
        name: "ExpressJS",
        color: "text-green-500",
      },
      {
        name: "MongoDB",
        color: "text-purple-500",
      },
    ],
    image: assessment2,
    source_code_link: "https://github.com/barrera77/sodv1251-assessment-2.git",
    demo_link: "https://sodv1251-assessment-2-latest.onrender.com",
  },
  {
    name: "e-Commerce Website",
    description:
      "A server-sidee-commerce simulation featuring inventory tracking, customer registration, and CRUD operations. Built with JavaScript, Node.js, includes a management system and storefront, deployed using Docker.",
    tags: [
      {
        name: "nodeJS",
        color: "white",
      },
      {
        name: "ExpressJS",
        color: "white",
      },
      {
        name: "Bootstrap",
        color: "text-purple-500",
      },
    ],
    image: assessment1,
    source_code_link: "https://github.com/barrera77/sodv1251-assesment-1.git",
    demo_link: "https://sodv1251-assesment-1-latest.onrender.com",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  /* {
    name: "Blazor",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg",
  }, */
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "mySQL",
    icon: mysql,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "DotNETCore",
    icon: netcore,
  },
];
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export { education, projects, technologies };
