import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-3 rounded-lg shadow-card bg-primary border border-secondary"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-primary min-h-[180px] rounded-lg"
      >
        <img
          src={image}
          alt="project_image"
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex justify-end m-3"></div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-white text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  </Tilt>
);

const Projects = () => {
  return (
    <div className=" xl:mt-12 xl:flex-row flex gap-10 overflow-hidden">
      <div className="w-full ">
        <div
          className={`${styles.paddingY} ${styles.paddingX} sm:pl-4 md:pl-16 md:w-[95%] lg:w-[75%] m-auto border-l-2 border-gradient`}
        >
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.heroSubHeaderText} mb-8`}>Projects</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={`${styles.heroSubText} mt-4 max-w-3xl`}
          >
            These are some of the projects I’ve worked on during my studies,
            highlighting my ability to learn, adapt, and apply concepts to
            create functional and meaningful solutions. While still in the early
            stages of my journey, I’m excited to share these examples of my
            progress.
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-9 px-5 py-8">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
