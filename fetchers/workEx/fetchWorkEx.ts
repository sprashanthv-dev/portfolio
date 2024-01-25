// TODO: Now retrieving mock work_ex json. To replace with
//       api call to database.
const fetchWorkEx = async () => {
  const resource = await fetch(`/data/work_ex/work_ex.json`);

  if (!resource.ok) {
    throw new Error(`Failed to fetch work_ex data`);
  }

  return resource.json();
}

export default fetchWorkEx;