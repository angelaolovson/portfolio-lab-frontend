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
  
    <div>
    { projectsData !== null ? 
      (<>
      {projectsData.map((project) => (
        <div className="projects">
          <h1>{project.name}</h1>
          <img className="img" src={project.image} alt="projectScreenShot"/>
          <a href={project.git}><button>Github</button></a>
          <a href={project.live}><button>live site</button></a>
        </div>
      
      

      ))}
      </>): "Loading"};
    </div>
    
  )
}

export default Projects;
		  