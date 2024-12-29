import React from "react";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={`py-0 text-white`}>
          <div className="lg:w-[30%] m-auto text-center">
            <p>
              &copy; 2024
              <strong>
                <span class="fw-bold"> &lt; Д /&gt;</span>{" "}
              </strong>{" "}
              Manuel Alva.
            </p>
            <p class="m-0">
              <a href="">
                My <i class="bi bi-linkedin"></i>
              </a>
            </p>
            <p class="m-0">email: barrera_ml@hotmail.com</p>
            <p class="m-0">Phone: 587-532-9485</p>
            <p>Calgary, AB Canada</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
