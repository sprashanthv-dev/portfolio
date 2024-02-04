import React from 'react';

const Profile = () => {
  return (
    <div className="p-20">
      <p className="my-3 md:text-xl">Hi, Nice to meet you! I am</p>
      <p className="text-3xl md:text-6xl m-0">Prashanth Srinivasan.</p>
      <p className="my-4 md:text-2xl text-justify">
        I am a full-stack engineer by trade, specializing in crafting clean,
        accessible and highly-performant web applications.
      </p>
      <p className="my-6 md:text-2xl text-justify">
        Currently, I am pursuing a Master's degree in Computer Science with a
        focus on Cloud Computing and Software Systems at the University of
        Colorado, Boulder.
      </p>
      <button className="border-solid border-2 p-2 rounded border-navbar-hover hover:bg-navbar-text hover:text-white">
        Contact me
      </button>
    </div>
  );
};

export default Profile;
