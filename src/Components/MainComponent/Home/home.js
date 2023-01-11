import "./home.css";
import Projects from "../Projects/project";
import Skills from "../Skills/skills";
import Certification from "../Certification/certifications";
import Contact from "../Contact/contact";
import ComponentCollection from "../../SubComponent/ComponentCollection/componentCollection";
export default function Home() {
    return (
    <div className="home">
      <div className="gif-container">
        {/* <img src="https://cdn.pixabay.com/animation/2022/10/06/19/34/19-34-14-12_512.gif" width="50%" height="90%"/> */}
        <img src="https://cdn.pixabay.com/animation/2022/10/08/14/56/14-56-12-19_512.gif" alt="img loading..." />
      </div>
     <ComponentCollection/>
     <Projects />
     <Skills/>
     <Certification/>
     <Contact/>
    </div>)
  }