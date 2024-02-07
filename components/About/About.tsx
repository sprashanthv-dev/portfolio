const About = () => {
  return (
    <div>
      <p className="text-xl text-center md:text-left md:text-2xl border-b-4 border-solid border-navbar-hover">
        About
      </p>
      <div className="flex flex-col md:flex-row">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src="images/me.jpeg"
          alt="Photo of me"
          className="rounded-full mt-4 self-center w-48 md:w-72 md:mx-6"
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
            to learn and grow as a software engineer. Please feel free to
            contact me using the{' '}
            {/*TODO: Add navigation to actual contact form */}
            <a href="" className="hover:underline">
              <strong>contact form </strong>
            </a>
            below for any work-related opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
