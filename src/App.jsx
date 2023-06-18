import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-center bg-no-repeat bg-cover bg-section-pattern">
          <About />
        </div>
        <div className="bg-center bg-no-repeat bg-cover bg-section2-pattern">
          <Experience />
          <Tech />
        </div>
        <div className="bg-center bg-no-repeat bg-cover bg-section4-pattern">
          <Works />
        </div>
        <div className="relative z-0 bg-center bg-no-repeat bg-cover bg-section3-pattern">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
