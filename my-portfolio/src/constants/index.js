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
} from "../assets";
import { color } from "framer-motion";

const education = [];
const projects = [
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
    image: "https://placedog.net/500/380",
    source_code_link: "",
  },
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
    image: "https://placedog.net/500/380",
    source_code_link: "",
  },
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
    image: "https://placedog.net/500/380",
    source_code_link: "",
  },
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
    image: "https://placedog.net/500/380",
    source_code_link: "",
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
