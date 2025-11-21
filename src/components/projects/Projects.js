import React from "react";
import {
  // Thumbnails,
  // CCM,
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  // workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Creative and Design" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Curriculum Design"
            category="Graphic Design"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Learning Spectrums"
            category="Logo Design"
            image={workImgEight}
          />
          <ProjectsCard
            title="Seasonal Flyer"
            category="Graphic Design"
            image={workImgFour}
          />

          {/* commented out the last for right */}

          {/* <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgOne}
          /> */}
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Business Flyer"
            category="Graphic Design"
            image={workImgFive}
          />
          <ProjectsCard
            title="Photography Curriculum"
            category="Graphic Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Church Flyer"
            category="Website"
            image={workImgThree}
          />

          {/* commented out the last for left */}
          {/* <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
