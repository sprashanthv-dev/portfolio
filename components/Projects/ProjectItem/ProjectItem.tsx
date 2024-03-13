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
    <div className="flex justify-between items-center">
      <img src={projectInfo.imageUrl} className="max-w-md" alt={`${projectInfo.title} Thumbnail`} />
      <div>
        <p>{projectInfo.title}</p>
        <p>{projectInfo.description}</p>
        <Skills skills={projectInfo.skills} />
        <div className="flex mx-2 md:mx-4">
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
      </div>
    </div>
  );
};

export default ProjectItem;