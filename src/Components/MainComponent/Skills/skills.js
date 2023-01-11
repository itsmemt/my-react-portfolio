import "./skills.css";
import data from "./data";
export default function Projects() {
  return (
    <div id="skills">
      <h1 className="sub-title">My Skills</h1>
      <div className="skills-list">
        {
          data.map((item, index) => {
            return (
              <section key={index}>
                <i className={item.icon}></i>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </section>
            )
          })}
      </div>
    </div>)
} 