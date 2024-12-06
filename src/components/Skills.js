import meter1 from "../assets/img/meter1.svg"; // You can replace these with specific images related to your skills.
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import java from "../assets/img/java.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              As a passionate Software Developer with expertise in C++, Java, Python, JavaScript, the MERN stack, MySQL, and Web Development, I specialize in creating dynamic, responsive, and user-friendly applications. My skillset spans both front-end and back-end technologies, enabling me to deliver seamless solutions from concept to deployment.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>MERN Stack</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>MySQL Database</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Express.js</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
