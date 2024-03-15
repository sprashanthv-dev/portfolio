import React from "react";

import { useTheme } from "context/ThemeContext";

import { socialIcons } from "lib/constants";

const Profile = () => {
  const { theme } = useTheme();

  return (
    <div className="py-2 md:pt-14 pb-8">
      <p className="text-center my-3 md:text-xl md:text-left">
        Hi, Nice to meet you!
      </p>
      <p className="text-3xl text-center md:text-6xl md:text-left">
        I am Prashanth Srinivasan.
      </p>
      <p className="my-4 md:text-2xl text-justify">
        A full-stack engineer by trade, specializing in crafting clean,
        accessible and highly-performant web applications.
      </p>
      <p className="my-6 md:text-2xl text-justify">
        Currently, I am pursuing a Master's degree in Computer Science with a
        focus on Software Systems and Cloud Computing at the University of
        Colorado, Boulder.
      </p>
      <div className="flex items-center justify-between">
        {/*TODO: Same button to be replicated for navigation to contact form */}
        {/*TODO: Change this button to a component */}
        <a href="Prashanth_Srinivasan_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className={`md:text-xl border-solid border-2 p-3 rounded 
        hover:scale-110 transform transition duration-y
        ${theme.type === "light" ? "border-light-mode-dark-color" : "border-dark-mode-alt-color"}
        ${theme.type === "light" ? "hover:bg-light-mode-dark-color" : "hover:bg-dark-mode-light-bg"}
        ${theme.type === "light" ? "hover:text-white" : "hover:text-black"}`}>
            Resume
          </button>
        </a>

        <div className="flex m">
          {socialIcons.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className={`${index !== 0 ? "mx-2 md:mx-3" : "mr-2"} hover:scale-150 transform transition duration-y`}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
            >
              <img
                src={`images/${item.label}_${theme.type}.svg`}
                alt={`${item.label} icon`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
