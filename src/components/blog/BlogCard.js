import React from "react";

const BlogCard = ({ image, imageLink, title, titleLink, subTitle, subTitleLink, category, categoryLink }) => {
  return (
    <div className="py-6 flex flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group">
      {/* Image Link */}
      <a 
        href={imageLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full h-full mb-2 overflow-hidden relative cursor-pointer block"
      >
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt={title}
        />
      </a>
      
      <div className="flex flex-col items-center gap-2">
        {/* Title Link */}
        <a 
          href={titleLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-designColor border-[1px] border-designColor px-2 hover:bg-designColor hover:text-white transition-colors duration-300"
        >
          {title}
        </a>
        
        {/* Subtitle Link */}
        <a 
          href={subTitleLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-base text-center font-semibold font-titleFont text-[#ccc] hover:text-designColor duration-300"
        >
          {subTitle}
        </a>
        
        {/* Category Link */}
        <a 
          href={categoryLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm -mt-1 text-gray-400 hover:text-designColor transition-colors duration-300"
        >
          {category}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;