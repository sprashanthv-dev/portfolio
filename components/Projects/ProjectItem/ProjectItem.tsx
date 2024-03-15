import React from "react";

import { ProjectFields } from "../../../interfaces";

import Skills from "../../Skills/Skills";
import { useTheme } from "../../../context/ThemeContext";

type Item = {
  projectInfo: ProjectFields
}

const ProjectItem = ({ projectInfo }: Item) => {

  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-between lg:flex-row mb-8">
      <img src={projectInfo.imageUrl} className="w-96 md:w-full lg:w-96 mb-auto" alt={`${projectInfo.title} Thumbnail`} />
      <div className="mt-4 lg:mt-0 lg:px-4">
        <div className="flex items-center">
          <p className="text-xl md:text-2xl hover:underline hover:cursor-pointer">
            {projectInfo.title}
          </p>
          {projectInfo.githubUrl ? (
            <a
              href={projectInfo.githubUrl}
              className="mx-2 md:mx-3 hover:scale-150 transform transition duration-y"
              target="_blank"
              rel="noopener noreferrer"
              title={projectInfo.title}
            >
              <img
                src={`images/github_${theme.type}.svg`}
                alt="GitHub Icon"
              />
            </a>
          ) : null}
          {projectInfo.videoUrl ? (
            <a
              href={projectInfo.videoUrl}
              className="mx-2 md:mx-3 hover:scale-150 transform transition duration-y"
              target="_blank"
              rel="noopener noreferrer"
              title={projectInfo.title}
            >
              <img
                src={`images/video_${theme.type}.svg`}
                alt="Video Icon"
              />
            </a>
          ) : null}
        </div>
        <p className="text-justify text-lg my-2">{projectInfo.description}</p>
        <Skills skills={projectInfo.skills} />
      </div>
    </div>
  );
};

export default ProjectItem;