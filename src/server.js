// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const projectsDataPath = "./projectsData.json";

// Read projects data from the JSON file
function readProjectsData() {
  const data = fs.readFileSync(projectsDataPath);
  return JSON.parse(data);
}

// Write projects data to the JSON file
function writeProjectsData(data) {
  fs.writeFileSync(projectsDataPath, JSON.stringify(data, null, 2));
}

// Get all projects
app.get("/api/projects", (req, res) => {
  const projects = readProjectsData();
  res.json(projects);
});

// Create a new project
app.post("/api/projects", (req, res) => {
  const projects = readProjectsData();
  const newProject = req.body;

  // Add the new project to the projects array
  projects.push(newProject);

  // Write the updated projects array to the JSON file
  writeProjectsData(projects);

  res.json({ success: true, message: "Project added successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
