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
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 rounded-2xl sm:w-[320px] xs:w-full border border-secondary"
      >
        <div className="relative w-full xs-h[150px] md:h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 right-0 md:flex justify-end m-1 px-3 py-1 card-img_hover rounded-3xl bg-primary xs:hidden">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[11px] text-white`}
              >
                #{tag.name}&nbsp;
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-secondary font-bold xs:text-[18px] sm:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="w-full text-white mt-4 flex items-center cursor-pointer flex-row justify-between">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-[45%] rounded-[5px] border border-secondary py-1 hover:bg-white hover:text-primary hover:border-white"
          >
            Demo
          </button>
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="bi-github w-[45%] rounded-[5px] border py-1 border-secondary hover:bg-white hover:text-primary hover:border-white"
          >
            <span className="xs:hidden sm:inline">&nbsp; Code</span>
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

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
