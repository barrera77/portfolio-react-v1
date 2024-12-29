import React from "react";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={`py-0 text-white`}>
          <div className="lg:w-[30%] m-auto text-center xs:text-[12px] sm:text-[14px]">
            <p>
              &copy; 2024
              <strong>
                <span className="font-bold"> &lt; Д /&gt;</span>{" "}
              </strong>{" "}
              Manuel Alva.
            </p>
            <p>
              <a href="">
                My <i className="bi bi-linkedin"></i>
              </a>
            </p>
            <p>email: barrera_ml@hotmail.com</p>
            <p>Phone: 587-532-9485</p>
            <p>Calgary, AB Canada</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
