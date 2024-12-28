import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Projects,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-contain bg-no-repeat bg-right">
            <Hero />
          </div>
          <About />
          <Projects />
          <div className="relative z-0 h-[40vh]">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
