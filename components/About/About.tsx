const About = () => {
  return (
    <div>
      <p className="text-center text-xl underline underline-offset-4 decoration-2 md:text-2xl">
        About
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <img
          src="images/me_4.jpg"
          alt="Photo of me"
          className="rounded-full mt-6 p-0 md:p-6 w-48 md:w-72"
        />
        <div className="about my-5 md:text-xl">
          <p className="text-justify mb-3">
            I have three years of professional experience as a full-stack
            engineer, designing and developing highly-scalable and
            fault-tolerant software applications using{' '}
            <strong>
              Angular, TypeScript, Java, Spring Framework, MySQL, Docker and
              Kubernetes
            </strong>{' '}
            for customers across the education, social welfare and supply chain
            sectors.
          </p>
          <p className="text-justify mb-3">
            My greatest strength lies in being open to new challenges, trying
            new things, and not being afraid of failure. These qualities opened
            the door for me to work with{' '}
            <strong>NASA's Colorado Space Grant Consortium </strong>
            as an embedded software research intern and with the{' '}
            <strong>US Army </strong>to build a mesh network prototype aiding
            their search and rescue operations.
          </p>
          <p className="text-justify">
            I am always looking forward towards new challenges and opportunities
            to learn and grow as a software engineer. My past professional
            experience, a strong understanding of computer science fundamentals,
            and the ability to adapt and thrive in fast-paced environments will
            make me an ideal fit for software engineering roles. Please feel
            free to contact me using the <strong>contact form</strong> below for
            any work-related opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
