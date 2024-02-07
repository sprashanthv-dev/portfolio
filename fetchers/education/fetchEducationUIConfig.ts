const fetchEducationUIConfig = async () => {
  const resource = await fetch(`/data/education/timeline_config.json`);

  if (!resource.ok) {
    throw new Error(`Failed to fetch education ui config data`);
  }

  return resource.json();
};

export default fetchEducationUIConfig;
