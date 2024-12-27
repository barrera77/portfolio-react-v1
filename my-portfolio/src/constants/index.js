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

const education = [];
const projects = [];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Blazor",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg",
  },
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
