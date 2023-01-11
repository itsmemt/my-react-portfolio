import "./certification.css";
import img1 from "./Images/HTML5CerImg.PNG";
import img2 from "./Images/CSS3CerImg.PNG";
import img3 from "./Images/JavascriptCerImg.PNG";
import img4 from "./Images/BootstrapCerImg.PNG";
import img5 from "./Images/FrontendCerImg.png"
export default function Certification() {
  return (
    <div className="certifications">
        <h2 className="sub-title">Certifications</h2>
        <div className="cretificates">
        <img src={img1} alt="img loading..."/>
        <img src={img5} alt="img loading..."/>
        <img src={img2} alt="img loading..."/>
        <img src={img3} alt="img loading..."/>
        <img src={img4} alt="img loading..."/>
        </div>  
    </div>
  );
}