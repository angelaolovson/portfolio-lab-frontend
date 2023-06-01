import { Link } from "react-router-dom";
import './Header.css'

function Header(props) {

    return (
        <header>
            <nav className="nav" >
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
  }
  
  export default Header;

