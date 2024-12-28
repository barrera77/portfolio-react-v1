import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="mb-6 xs:pl-0 md:pl-6">
        <p className={`${styles.heroSubText} m-auto mt-4 max-w-3xl lg:pl-5`}>
          These are some technologies I have been working with lately:
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 lg:w-[75%] m-auto">
        {technologies.map((technology) => (
          <div
            className="xs:w-20 xs:h-20 sm:w-24 sm-h-24 md:w-28 md:h-28"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
