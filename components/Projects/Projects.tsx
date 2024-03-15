import { useQuery } from "@tanstack/react-query";

import { ProjectFields } from "../../interfaces";
import fetchProjects from "../../fetchers/projects/fetchProjects";
import ProjectItem from "./ProjectItem/ProjectItem";
import { useTheme } from "../../context/ThemeContext";

const Projects = () => {

  const { theme } = useTheme();
  const projects = useQuery(["projects_list"], fetchProjects);
  const projectData: ProjectFields[] = projects?.data ?? [];

  return (
    <div className="mt-8">
      <p className={`text-xl mb-4 text-left md:text-2xl border-b-2 border-solid 
      ${theme.type === 'light' ? 'border-light-mode-alt-color' : 'border-dark-mode-alt-color'}`}>
        Projects
      </p>
      {projectData.map((project, index: number) => (
        <ProjectItem
          key={index}
          projectInfo={project} />
      ))}
    </div>
  );
};

export default Projects;