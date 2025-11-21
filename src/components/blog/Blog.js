import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Web Development/Design" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            imageLink="https://officesuitex.onrender.com/"
            title="Focus Suite X"
            titleLink="https://github.com/Ige-Joseph/officeSuiteX"
            subTitle="A full-Stack Django Web Application Offering Multiple File Conversion and Manipulation Tools."
            subTitleLink="https://github.com/Ige-Joseph/officeSuiteX"
            category="View Github Code"
            categoryLink="https://github.com/Ige-Joseph/officeSuiteX"
          />
          <BlogCard
            image={blogImgTwo}
            imageLink="https://yourwebsite.com/vitals-hms"
            title="Vitals HMS"
            titleLink="https://yourwebsite.com/vitals-hms"
            subTitle="An Hospital Management System With Unique Features such as Prescription System with QR Codes and Audit trails"
            subTitleLink="https://docs.vitals-hms.com"
            category="Coming Soon"
            categoryLink="https://yourwebsite.com/vitals-hms"
          />


          {/* 1st row Add more blog cards here when ready */}
        </div>


        <div className="px-6">
          {/* 2nd row Add more blog cards here when ready */}

          <BlogCard
            image={blogImgTwo}
            imageLink="https://yourwebsite.com/vitals-hms"
            title="Vitals HMS"
            titleLink="https://yourwebsite.com/vitals-hms"
            subTitle="An Hospital Management System With Unique Features such as Prescription System with QR Codes and Audit trails"
            subTitleLink="https://docs.vitals-hms.com"
            category="Coming Soon"
            categoryLink="https://yourwebsite.com/vitals-hms"
          />
        </div>


      </div>
    </div>
  );
};

export default Blog;