import { useEffect, useState } from "react";
import './About.css'

function About(props) {

  const [aboutData, setAboutData] = useState(null)

  const URL = "https://express-react-fullbuild-portfoliolab.onrender.com/about";

  useEffect(() => {
    const fetchAboutData = async () => {
      const response = await fetch(URL)
      const about = await response.json()
      console.log(about)
      setAboutData(about);
    };

    fetchAboutData();
  },[]);


  return (
    <div>
    { aboutData !== null ? 
    (<>
    <div className="about">
      <div className="aboutMain">
        <div className="imgContainerAbout">
          <img className="imgHome" src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1683571916/Portfolio%20Lab/Greenshot_2023-01-11_17.36.29_ts87gn.png" alt="projectScreenShot"/>
        </div>
        <div className="infoContainerAbout">
          <div className="nameAbout">{aboutData.name}</div>
          <div className="titleAbout">Software Engineer | Fashion Merchandiser | Florist</div>
          <div className="bioAbout">{aboutData.bio}</div>
          <div className="emailAbout">Contact Me: angela.olovson@gmail.com</div>
          <div className="buttonsAbout">
            <a href="https://github.com/angelaolovson"><button className="buttons">Github</button></a>
            <a href="https://www.linkedin.com/in/angela-olovson-yihui-lin/"><button className="buttons">LinkedIn</button></a>
          </div>
        </div>

      </div>
    </div>
    </>): "Loading"}
      
  </div>
  )
  
}

export default About;