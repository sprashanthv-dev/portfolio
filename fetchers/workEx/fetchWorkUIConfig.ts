const fetchWorkEx = async () => {
  const resource = await fetch(`/data/work_ex/timeline_config.json`);

  if (!resource.ok) {
    throw new Error(`Failed to fetch work_ex ui config data`);
  }

  return resource.json();
}

export default fetchWorkEx;