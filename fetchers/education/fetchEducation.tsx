// TODO: Now retrieving mock education json. To replace with
//       api call to database.
const fetchEducation = async () => {
  const resource = await fetch(`/data/education/education.json`);

  if (!resource.ok) {
    throw new Error(`Failed to fetch education data`);
  }

  return resource.json();
};

export default fetchEducation;
