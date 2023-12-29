import React from "react";
import "../css/ProjectsGrid.css"; // Make sure this CSS file is in place
import countImage from "../assets/count.png";
import studentImage from "../assets/studentlist.png";
import firstImage from "../assets/first-project.png";
import todoList from "../assets/TodoList.png";
import myPortfolio from "../assets/My-Porfolio.png";
import backEnd from "../assets/Backend.png";
const projects = [
  {
    title: "Project 1",
    description:
      "An innovative web application for managing personal tasks and schedules.",
    imageUrl: todoList,
    projectUrl: "https://tranquil-begonia-5138fd.netlify.app/", // Replace with actual project URL
  },
  {
    title: "Project 2",
    description: "Print Student name list and course they are enrolled",
    imageUrl: studentImage,

    projectUrl: "http://project2.com", // Replace with actual project URL
  },
  {
    title: "Project 3",
    description: "Random webpage design",
    imageUrl: firstImage,

    projectUrl: "https://gregarious-genie-8e855b.netlify.app/", // Replace with actual project URL
  },
  {
    title: "Project 4",
    description: "Counter Page",
    imageUrl: countImage,

    projectUrl: "https://classy-dodol-e69c6e.netlify.app/", // Replace with actual project URL
  },
  {
    title: "Project 5",
    description: "My Project Porfolio",
    imageUrl: myPortfolio,
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
