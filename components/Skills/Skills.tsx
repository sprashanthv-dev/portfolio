import Skill from "./Skill";


const Skills = (props : {skills: string[]}) => {

  const { skills } = props;

  return (
    <ul className="flex my-4 flex-wrap">
      {skills.map((skill: string, index: number) => (
        <Skill key={index} item={skill}></Skill>
      ))}
    </ul>
  )
}

export default Skills;