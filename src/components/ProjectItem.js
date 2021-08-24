import React from "react";

const ProjectItem = ({ image, title, description, href }) => {
  return (
    <div className="bg-dark w-96 border-black border-2 rounded-2xl my-4 mx-8 shadow-2xl">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={image} alt="" className="w-96 h-56 rounded-t-2xl" />
        <p className="text-turquoise-dark font-extrabold my-3 mx-5 text-2xl text-center">
          {title}
        </p>
          <div className="text-justify my-3 mx-5">
              {description && description.map((line, i) => {
                  return (<p className="text-grayish-light" key={i}>{line}</p>)
              })}
          </div>
      </a>
    </div>
  );
};

export default ProjectItem;
