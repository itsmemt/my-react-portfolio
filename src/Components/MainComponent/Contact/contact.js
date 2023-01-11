import "./contact.css";
import resume from "./images/murari_thakur_cv.pdf";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <h1 className="sub-title">Contact Me</h1>
        <p><i className="fas fa-paper-plane"></i> murari.thakur6998@gmail.com</p>
        <p><i className="fas fa-phone"></i>+91 9891862903</p>
        <div className="social-icons">
          <a href="https://github.com/itsmemt" rel="noopener noreferrer"  target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://in.linkedin.com/in/murari-thakur-1580ba210"  rel="noopener noreferrer" target="_blank"><i
            className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/itsmemthakur_1998/"  rel="noopener noreferrer" target="_blank"><i
            className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/murari.thakur.731" rel="noopener noreferrer"  target="_blank"><i
            className="fab fa-facebook"></i></a>
        </div>
        <a href={resume} download className="btn btn2">Download CV</a>
      </div>
      <div className="contact-right">
        <form action="" name="contact" data-netlify="true" method="POST">
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn2">Submit</button>
        </form>
      </div>
    </div>
  );
}
