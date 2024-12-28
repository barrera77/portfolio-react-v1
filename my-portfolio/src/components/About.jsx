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
    <div className="lg:py-5 mt-6 xl:pt-12">
      <div
        className={`${styles.paddingX} ${styles.paddingY} sm:pl-4 md:pl-16 md:w-[95%] lg:w-[75%] m-auto border-l-2 border-gradient`}
      >
        <motion.div variants={textVariant()} className="mb-9">
          <h2 className={styles.heroSubHeaderText}>About me</h2>
        </motion.div>
        <motion.p
          ref={ref}
          variants={fadeIn("", "tween", 0.1, 1)} // Apply fade-in variants
          initial="hidden"
          animate={isInView ? "show" : "hidden"} // Animate only when in view
          className={`${styles.heroSubText} "mt-4 max-w-3xl`}
        >
          I am a software development student, driven by curiosity. I'm a quick
          learner and I learn by discovering exciting concepts online and
          bringing them to life in my projects. I take pride in consistently
          going the extra mile and improving my skills with every challenge I
          face.Take a look around to explore my journey, and aspirations in the
          world of software development!
        </motion.p>
      </div>

      <Tech />
    </div>
  );
};

export default SectionWrapper(About, "about");
