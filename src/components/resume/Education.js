import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2022 - Present"
          title="Web Developer"
          subTitle="Frelance."
          des="I build seamless front-end experiences with HTML, CSS, JavaScript, and React, and develop robust back-end systems using Python/Django, PostgreSQL, and Supabase."
        />
        <ResumeCard
          badge="2022 - Present"
          title="Web Designer"
          subTitle="Freelance."
          des="I’m a web designer who creates clean, responsive, and user-focused websites using tools like WordPress and modern design principles. I specialize in designing intuitive layouts, customizing themes, and ensuring a smooth user experience across all devices. My goal is to make websites not just look good, but feel easy to use.

"
        />
        <ResumeCard
          badge="2019 - Present"
          title="Creative Designer"
          subTitle="ReactBD.com."
          des="I’m a creative designer who blends graphic design, motion graphics, and 3D elements to create engaging visual content. I work across tools like After Effects, Premiere Pro, Blender, Photoshop, and Illustrator to design visuals that move — literally and emotionally. I love pushing ideas beyond the static and bringing stories to life through dynamic design."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />

        
        <ResumeCard
          badge="2024 - "
          title="National Open University of NIgeria"
          subTitle="PGD IT (In View)"
          des="Currently pursuing a Postgraduate Diploma in IT."
        />
        
        <ResumeCard
          badge="2022 - 2023"
          title="Delyork Academy"
          subTitle="ND"
          des="Completed a Diploma in Animation and Post‑Production at Del‑York Creative Academy, in partnership with the Mastercard Foundation through the Youth in Animation and Post‑Production Initiative (YAPPI)"
        />


        <ResumeCard
          badge="2019 - 2024"
          title="National Open University of NIgeria"
          subTitle="B.sc(Ed)"
          des="I studied Science Education at the National Open University of Nigeria, Abuja."
        />

        <ResumeCard
          badge="2015 - 2018"
          title="Federal College of Education (Technical) Akoka"
          subTitle="National Certificate in Education"
          des="I studied Science Education at the Federal College of Education (Technical) Akoka, Lagos."
        />

        <ResumeCard
          badge="2015 - 2016"
          title="Programming"
          subTitle="Full Stack Web Development"
          des="Hands-on learning and project-based development using HTML, CSS, JavaScript, React, Python/Django, PostgreSQL, Supabase, and Vercel. Specialized in building scalable, responsive web applications."
        />
        {/* <ResumeCard
          badge="2018 - 2021"
          title="MERN Stack Developer"
          subTitle="Dhaka"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        /> */}
      </div>
    </div>
  );
};

export default Education;
