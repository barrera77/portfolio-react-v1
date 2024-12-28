import React from "react";
import { SectionWrapper } from "../hoc";
import Tech from "./Tech";
import { motion, useInView } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const fadeIn = (direction = "", type = "tween", delay = 0, duration = 1) => ({
  hidden: { opacity: 0, y: direction === "up" ? 50 : 0 },
  show: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="py-5">
      <div
        className={`${styles.paddingX} ${styles.paddingY} lg:w-[75%] m-auto border-l-2 border-gradient`}
      >
        <motion.div variants={textVariant()} className="mb-9">
          <h2 className={styles.heroSubHeaderText}>About me.</h2>
        </motion.div>
        <motion.p
          ref={ref}
          variants={fadeIn("", "tween", 0.1, 1)} // Apply fade-in variants
          initial="hidden"
          animate={isInView ? "show" : "hidden"} // Animate only when in view
          className="mt-4 text-white text-[22px] max-w-3xl leading-[30px]"
        >
          I am a software development student, driven by curiosity. I'm a quick
          learner and I learn by discovering exciting concepts online and
          bringing them to life in my projects. I take pride in consistently
          going the extra mile and improving my skills with every challenge I
          face.Take a look around to explore my journey, and aspirations in the
          world of software development!
        </motion.p>
      </div>
      <p className="mt-4 text-white text-[22px] max-w-3xl leading-[30px] lg:w-[75%] m-auto px-6">
        These are some technologies I have been working with lately:
      </p>
      <Tech />
    </div>
  );
};

export default SectionWrapper(About, "about");
