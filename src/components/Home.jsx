import animationData from '../assets/programming.json'
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Home({Lottie}) {
  return (
    <section className="home" id="home">
      <div
        className="home-content"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h3>Hello, It's Me</h3>
        <div>
          <h1>Mahmoud AbuEllil</h1>
          <h3>
            And I'm a <span>MERN Stack Developer</span>
          </h3>
        </div>
        <p>
          Welcome to my MERN stack portfolio! Discover my expertise in building
          modern, scalable web applications using React.js, Node.js, Express.js,
          and MongoDB. Explore dynamic projects showcasing seamless front-end
          experiences, powerful back-end APIs, and efficient data management.
          Let's discuss potential collaborations or answer any questions you may
          have
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/abu-ellil-806619254/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Abu-ellil">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/MahmoudAboelli3">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <a
          href="https://drive.google.com/u/0/uc?id=1b4Vb1JwG3YwfP1NotolsjdORIgaFyA5r&export=download"
          className="btn"
          download
        >
          Download CV
        </a>
      </div>
      <div className="animation">
        <Lottie animationData={animationData} />
      </div>
    </section>
  );
}

export default Home;
