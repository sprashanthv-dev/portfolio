import { useTheme } from "../../context/ThemeContext";

const Skill = (props: {item: string}) => {

  const { item } = props;
  const { theme } = useTheme();

  return (
    <li className={`text-lg w mx-2 my-1 border-2 rounded-full 
                  hover:scale-110 transform transition duration-y 
                  ${theme.type === "light" ? "border-light-mode-alt-color" : "border-dark-mode-alt-color"} `}>
      <span className="mx-1 p-2">{item}</span>
    </li>
  );
};

export default Skill