import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Projects = () => {
  return (
    <div className=" xl:mt-12 xl:flex-row flex gap-10 overflow-hidden">
      <div className="w-full ">
        <div
          className={`${styles.paddingY} ${styles.paddingX} sm:pl-4 md:pl-16 md:w-[95%] lg:w-[75%] m-auto border-l-2 border-gradient`}
        >
          <h2 className={`${styles.heroSubHeaderText} mb-8`}>Projects</h2>

          <p className={`${styles.heroSubText} mt-4 max-w-3xl`}>
            These are some of the projects I’ve worked on during my studies,
            highlighting my ability to learn, adapt, and apply concepts to
            create functional and meaningful solutions. While still in the early
            stages of my journey, I’m excited to share these examples of my
            progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
