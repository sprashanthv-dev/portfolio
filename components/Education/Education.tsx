import {useTheme} from "../../context/ThemeContext";

const Education = () => {

    const { theme } = useTheme();

    return (
        <>
            <p className={`text-xl mb-4 text-left md:text-2xl border-b-2 border-solid
            ${theme.type === 'light' ? 'border-light-mode-alt-color' : 'border-dark-mode-alt-color'}`}>
               Education
            </p>
            <div>
                <div className={`flex flex-col items-center justify-around md:flex-row p-5 border-4 rounded shadow-lg ${theme.type === 'light' ? "border-light-mode-dark-color" : 'border-dark-mode-light-bg'} m-5`}>
                    <img className="mb-4 md:mb-0" src="images/cu-logo.png" alt="CU Boulder Logo"
                         width="96"/>
                    <div className="flex flex-col text-center md:block mx-5 px-5">
                        <p className="text-xl md:text-2xl">Master of Science (MS)</p>
                        <p className="text-xl">Computer Science</p>
                        <p className="text-xl">University of Colorado at Boulder</p>
                        <p className="text-xl">GPA: 3.96/4.0</p>
                        <p className="text-xl">Aug 2022 - May 2024</p>
                    </div>
                </div>
                <div className={`flex flex-col items-center justify-around md:flex-row p-5 border-4 rounded shadow-lg ${theme.type === 'light' ? "border-light-mode-dark-color" : 'border-dark-mode-light-bg'} mx-5 my-10`}>
                    <img className=" mb-4 md:mb-0" src="images/psg-logo.png" alt="PSG Tech Logo"
                         width="96"/>
                    <div className="flex flex-col text-center md:block mx-5 px-5">
                        <p className="text-xl md:text-2xl">Master of Science (MSc)</p>
                        <p className="text-xl">Integrated Software Systems</p>
                        <p className="text-xl">PSG College of Technology</p>
                        <p className="text-xl">GPA: 8.72/10.0</p>
                        <p className="text-xl">Jul 2014 - May 2019</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;