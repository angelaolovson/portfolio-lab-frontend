import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css'

function App() {

  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
)

  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;


