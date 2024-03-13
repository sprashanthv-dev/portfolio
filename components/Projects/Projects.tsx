import { ProjectFields } from "../../interfaces";
import { useQuery } from "@tanstack/react-query";
import fetchProjects from "../../fetchers/projects/fetchProjects";
import ProjectItem from "./ProjectItem/ProjectItem";

const Projects = () => {

  const projects = useQuery(["projects_list"], fetchProjects);
  const projectData: ProjectFields[] = projects?.data ?? [];

  return <div>
    {projectData.map((project, index: number) => (
      <ProjectItem
        key={index}
        projectInfo={project} />
    ))}
  </div>;
};

export default Projects;