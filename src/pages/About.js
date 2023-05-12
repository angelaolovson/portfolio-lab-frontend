import { useEffect, useState } from "react";

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
      <h2>{aboutData.name}</h2>
      <h3>{aboutData.email}</h3>
      <p>{aboutData.bio}</p>
    </>): "Loading"}
      
  </div>
  )
  
}

export default About;