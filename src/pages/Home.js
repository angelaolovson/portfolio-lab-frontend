import './Home.css'


function Home(props) {
  
    return (
      <div className="homeMain">
        <div className='homeSubMain'>
        
        <div className="imgContainer">
          <img className="imgHome" src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1683571916/Portfolio%20Lab/Greenshot_2023-01-11_17.36.29_ts87gn.png" alt="projectScreenShot"/>
        </div>
        <div className="verticalLine"></div>
        <div className="infoContainer">
          <div className='nameHome'>Angela Olovson</div>
          <div className='titleHome'>Software Engineer</div>
          <div className='brandstatement'>
            With a background in fashion allocation analysis and wedding floristry, Angela offers a distinctive approach to software development, blending creativity, artistic sensibility, and analytical thinking to tackle intricate challenges.
          </div>
        </div>
        </div>

      </div>
    )
  }
  
  export default Home;