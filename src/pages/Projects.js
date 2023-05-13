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
          <h1>{project.name}</h1>
          <img className="img" src={project.image} alt="projectScreenShot"/>
          <div className="notes">{project.notes}</div>
          <div className="buttons">
            <a href={project.git}><button>Github</button></a>
            <a href={project.live}><button>Live Site</button></a>
          </div>
        </div>
      
      

      ))}
      </>): "Loading"}
    </div>
    
  )
}

export default Projects;
		  