import ProjectsGrid from "./ProjectsGrid";
import "../css/HomePage.css";
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
              <a href="#interests">Interest</a>
            </li>
          </ul>
        </nav>
        <h1>TENZIN RINCHEN</h1>
        <p>FullStack Developer in the making </p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Full Stack Developer adept at creating seamless front-end interfaces
          and designing scalable back-end systems, passionate about transforming
          innovative ideas into practical digital solutions.
        </p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <ProjectsGrid />
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>Web Development: Proficient in HTML, CSS, JavaScript...</p>
        <p>
          Programming Languages Java, JavaScript, PL/SQL Frameworks/ORM Spring
          core, Spring boot, Spring AOP, Spring Transaction, Spring JPA, Spring
          MVC, Hibernate ORM, JSP, JPA. Web Technologies/J2EE JSP, Servlets,
          React, Flux, Query, JSTL, AJAX, JavaScript, HTMLS, CSS, JSON XML IDE's
          and Utilities Eclipse, My Eclipse, NetBeans, IntelliJ IDEA, Spring
          Suite Database MySQL, Oracle, SQL Server, MongoDB Web Services RESTful
          Web Services. Microservices Version control/Build Tools Git. SVN
          Testing Tools JUnit. Mockito. Application Servers BM Web Sphere,
          WebLogic, Tomcat Operating Systems Windows. Unix. Mac OSX Management
          Tools Log4J, JIRA, Jenkins
        </p>
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <p>
          I am fueled by an unwavering passion for coding, where each line of
          code becomes an opportunity to create, innovate, and bring ideas to
          life. My commitment to excellence is not just a professional trait but
          a genuine love for the craft, driving me to continuously learn, adapt,
          and deliver exceptional solutions in the ever-evolving world of
          technology.
        </p>
      </section>

      <footer>
        <h3>Contact</h3>
        <p>Feel free to reach out to me through the following channels:</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:rinchen344@gmail.com">rinchen344@gmail.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/rinchen344">
              linkedin.com/in/rinchen344
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/rinchenten344">
              github.com/rinchenten344
            </a>
          </li>
          {/* Add more contact information as needed */}
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
