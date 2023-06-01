import { useEffect, useState } from "react";
import './Projects.css'


function Projects(props) {

  const [projectsData, setProjectsData] = useState(null)

  const URL = "https://express-react-fullbuild-portfoliolab.onrender.com/projects";

  useEffect (() => {
    const fetchProjectData = async () => {
      const response = await fetch(URL)
      const projects = await response.json()
      setProjectsData(projects)
    };

    fetchProjectData();
  }, []);

  return (
  
    <div className="projects">
    { projectsData !== null ? 
      (<>
      {projectsData.map((project) => (
        <div >
          <div className="projectContainer">
            <div className="projectTitle">{project.name}</div>
            <img className="projectImg" src={project.image} alt="projectScreenShot"/>
            <div className="projectNotes">{project.notes}</div>
          </div>
          <div className="projectButtons">
            <a href={project.git}><button className="buttons">Github</button></a>
            <a href={project.live}><button className="buttons">Live Site</button></a>
          </div>
        </div>
      
      

      ))}
      </>): "Loading"}
    </div>
    
  )
}

export default Projects;
		  