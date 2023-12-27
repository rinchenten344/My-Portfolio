import ProjectsGrid from "./ProjectsGrid";

const HomePage = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#interests">Interests</a>
            </li>
          </ul>
        </nav>
        <h1>Jay Guragain</h1>
        <p>Aspiring Software Engineer and Passionate Environmentalist</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am an enthusiastic and dedicated student
          specializing in Full Stack Development...
        </p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <ProjectsGrid />
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>Web Development: Proficient in HTML, CSS, JavaScript...</p>
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <p>
          Continuous Learning: Passionate about learning new programming
          languages...
        </p>
      </section>

      <footer>
        <p>Contact me at: [Email Address]</p>
      </footer>
    </div>
  );
};

export default HomePage;
