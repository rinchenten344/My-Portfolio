// ProjectsGrid.js
import React, { useState, useEffect } from "react";
import "../css/ProjectsGrid.css";

const ProjectsGrid = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data from the backend when the component mounts
    fetch("http://localhost:3001/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
