import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 pt-20 mb-10 border-2 border-b-0 border-l-0 border-r-0 border-white">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h2 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-medium text-center text-[20px]">
            {technology.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
