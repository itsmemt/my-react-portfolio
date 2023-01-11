import data from "./data";
import "./project.css";
export default function Projects() {
  return (
    <div id="projects">
      <h1 className="sub-title">My Projects</h1>
      <div className="project-list">
        {data.map((item, index) => {
          return (
            <section className="project" key={index}> 
              <img src={item.img} alt="img loading..." />
              <div className="layer">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank"  rel="noopener noreferrer">
                  <i className={item.icon}></i>
                </a>
              </div>
            </section>
          )
        })
        }
      </div>
    </div>
  )
};
