import React from 'react';

const Profile = () => {
  return (
    <div className="py-2 md:py-14">
      <p className="text-center my-3 md:text-xl md:text-left">
        Hi, Nice to meet you! I am
      </p>
      <p className="text-3xl text-center md:text-6xl md:text-left">
        Prashanth Srinivasan.
      </p>
      <p className="my-4 md:text-2xl text-justify">
        I am a full-stack engineer by trade, specializing in crafting clean,
        accessible and highly-performant web applications.
      </p>
      <p className="my-6 md:text-2xl text-justify">
        Currently, I am pursuing a Master's degree in Computer Science with a
        focus on Cloud Computing and Software Systems at the University of
        Colorado, Boulder.
      </p>
      <div className="flex">
        <button className="border-solid border-2 p-4 rounded border-navbar-hover hover:bg-navbar-text hover:text-white">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Profile;
