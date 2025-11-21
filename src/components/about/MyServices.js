import React from "react";
// import { FaAppStoreIos } from "react-icons/fa";
// import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { SiBlender } from "react-icons/si";
import ServicesCard from "./ServicesCard";
import { SiAdobe } from "react-icons/si";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Building dynamic, user-focused websites and web apps using modern frameworks and clean code."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Designing responsive, visually engaging layouts with an eye for detail and user experience."
      />
      <ServicesCard
        icons={<SiAdobe />}
        title="Creative Design"
        subTitle="Blending visuals, storytelling, and branding to craft designs that connect and communicate."
      />
      <ServicesCard
        icons={<SiBlender  />}
        title="Motion & 3D"
        subTitle="Creating animations and 3D visuals using Blender and Adobe tools to bring ideas to life."
      />
    </div>
  );
};

export default MyServices;
