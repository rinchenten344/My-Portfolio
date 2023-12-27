import React from "react";
import "../css/ProjectsGrid.css"; // Make sure this CSS file is in place

const projects = [
  {
    title: "Project 1",
    description:
      "An innovative web application for managing personal tasks and schedules.",
    imageUrl: "path/to/image1.jpg", // Replace with actual image URL
    projectUrl: "http://project1.com", // Replace with actual project URL
  },
  {
    title: "Project 2",
    description:
      "A mobile app that helps users track fitness activities and health stats.",
    imageUrl: "path/to/image2.jpg", // Replace with actual image URL
    projectUrl: "http://project2.com", // Replace with actual project URL
  },
  {
    title: "Project 3",
    description:
      "A real-time chat application built with Node.js and WebSocket.",
    imageUrl: "path/to/image3.jpg", // Replace with actual image URL
    projectUrl: "http://project3.com", // Replace with actual project URL
  },
  {
    title: "Project 4",
    description:
      "E-commerce platform with a fully functional shopping cart and payment gateway integration.",
    imageUrl: "path/to/image4.jpg", // Replace with actual image URL
    projectUrl: "http://project4.com", // Replace with actual project URL
  },
  {
    title: "Project 5",
    description:
      "A blog platform with a custom content management system, featuring user authentication and post management.",
    imageUrl: "path/to/image5.jpg", // Replace with actual image URL
    projectUrl: "http://project5.com", // Replace with actual project URL
  },
];

const ProjectsGrid = () => {
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
