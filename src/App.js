import Home from './Components/MainComponent/Home/home';
import About from './Components/MainComponent/About/about';
import AboutEducation from "./Components/MainComponent/About/aboutEducation";
import AboutExperience from "./Components/MainComponent/About/aboutExperience";
import AboutSkill from "./Components/MainComponent/About/aboutSkill";
import Projects from './Components/MainComponent/Projects/project';
import Skills from "./Components/MainComponent/Skills/skills"
import Contact from './Components/MainComponent/Contact/contact';
import Certification from './Components/MainComponent/Certification/certifications';
import Navbar from "./Components/SubComponent/Navbar/navbar";
import Footer from "./Components/SubComponent/Footer/footer";
import TravelBlog from './Components/SubComponent/Travel_Journel/travel';
import Carousel from './Components/SubComponent/Carousel/carousel';
import Card from './Components/SubComponent/Card/Card';
import Todos from "./Components/SubComponent/Todos/todos"
import InvalidUrl from './Components/SubComponent/InvalidUrl/InvalidUrl';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} >
            <Route index element={<TravelBlog />} />
            <Route path="card" element={<Card />} />
            <Route path="carousel" element={<Carousel />} />
            <Route path="travelBlog" element={<TravelBlog />} />
            <Route path="todos" element={<Todos />} />
          </Route>
          <Route exact path="/about" element={<About />}>
            <Route index element={<AboutEducation />} />
            <Route path="aboutEducation" element={<AboutEducation />} />
            <Route path="aboutSkills" element={<AboutSkill />} />
            <Route path="aboutExperience" element={<AboutExperience />} />
          </Route>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/certifications" element={<Certification />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<InvalidUrl />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
};
export default App;