// TODO: Fetching local json currently. To move to a CMS like Strapi

const fetchProjects = async () => {
  const resource = await fetch("/data/projects/projects.json");

  if (!resource.ok) {
    throw new Error(`Failed to fetch projects list`);
  }

  return resource.json();
}

export default fetchProjects;