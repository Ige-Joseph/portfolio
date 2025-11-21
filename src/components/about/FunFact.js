import React from "react";
import { BsTrophyFill } from "react-icons/bs";
// import { SiAntdesign } from "react-icons/si";
// import { BiCodeAlt } from "react-icons/bi";
// import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";
import { FaAws } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<MdOutlineSecurity />} des="Cybersecurity Foundations (Cisco)" />
      <FunFactCard icon={<BsTrophyFill />} des="Tech Tutor" />
      <FunFactCard icon={<FaAws />} des="DevOps" />
      <FunFactCard icon={<FaBook />} des="Industrial/Applied Tech Enthusiast" />
    </div>
  );
};

export default FunFact;
