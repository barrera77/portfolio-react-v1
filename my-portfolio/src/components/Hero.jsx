import React from "react";
import Navbar from "./Navbar";
import { styles } from "../styles";

const Hero = () => {
  return (
    <div className="hero-background xl:bg-contain lg:h-screen xs:h-[50%] md:h-[50vh] xs:bg-[length:100%_100%] sm:bg-[length:70%_100%] md:bg-contain lg:bg-[length:60%_80%] lg:bg-right-top">
      <Navbar />
      <section className="w-full mx-auto ">
        <header className="xl:w-[70%] lg:w-[80%] xs:w-[80%] h-[100%] mx-auto lg:pt-[8%] xs:pt-[5%]">
          <div
            className={`lg:${styles.paddingX} xs:pl-4 pt-[1.5rem] w-[100%] h-[40%] m-auto border-l-2 border-gradient`}
          >
            <p className={`${styles.heroIntroText}`}>Hi, I am</p>
            <h1 className={`${styles.heroHeaderText}`}>Manuel Alva -</h1>
            <span className={`${styles.heroSubHeaderText}`}>
              Software Developer Apprentice
            </span>
            <p className={`${styles.heroSubText}`}>
              with a passion for exploring new ideas and pushing boundaries.
            </p>
          </div>
          <div
            className={`${styles.paddingX} lg:${styles.paddingY} lg:mt-[10%] xs:p-0 xl:w-[60%] lg:w-[90%] xs:w-[100%] flex flex-row gap-4 xs:flex-col md:flex-row xs:mt-[30px]`}
          >
            <a href="" className={`${styles.headerButton} `}>
              <i class="bi bi-linkedin header-button-icon"></i> My Linked-in
            </a>
            <a href="" className={`${styles.headerButton}`}>
              <i class="bi bi-github header-button-icon"></i> Github
            </a>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Hero;