// import './Projects.css';
import auto from '../images/automation.jpg'
import cc from '../images/cc.jpg'
import cyber from '../images/cyber.jpg'
import ml from '../images/ml.jpg'
import robotics from '../images/robotics.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
const Projects = () => {
  return (
    <div className="something">
      <h2 className="text-center" style={{ fontWeight: "700", color: "blue", marginBottom: "40px" }}></h2>
      <div className="container">
        <div className='row g-3 '>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className="card bg-dark">
              <img src={robotics} class="card-img-top" alt="..." />
              <div className="card-body">
                <span>September 10, 2022</span>
                <h3 className="card-title" style={{ fontWeight: "700" }}>Robotics</h3>
                <p className="card-text">Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans.</p>
                <div className="proj-btn">
                <button className="btnProj">Open</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className="card bg-dark">
              <img src={cc} class="card-img-top" alt="..." />
              <div className="card-body">
                <span>August 15, 2022</span>
                <h3 className="card-title" style={{ fontWeight: "700" }}>Cloud Computing</h3>
                <p className="card-text">Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet to offer faster innovation, flexible resources, and economies of scale.</p>
                <div className="proj-btn">
                <button className="btnProj">Open</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className="card bg-dark" >
              <img src={ml} className="card-img-top" alt="..." />
              <div className="card-body">
                <span>July 25, 2022</span>
                <h3 className="card-title" style={{ fontWeight: "700" }}>Machine Learning</h3>
                <p className="card-text">Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence.</p>
                <div className="proj-btn">
                <button className="btnProj">Open</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className="card bg-dark" >
              <img src={cyber} className="card-img-top" alt="..." />
              <div className="card-body">
                <span>May 2, 2022</span>
                <h3 className="card-title" style={{ fontWeight: "700" }}>Cyber Security</h3>
                <p className="card-text">Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security.</p>
                <div className="proj-btn">
                <button className="btnProj">Open</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className="card bg-dark">
              <img src={auto} className="card-img-top" alt="..." />
              <div className="card-body">
                <span>February 19, 2022</span>
                <h3 className="card-title" style={{ fontWeight: "700" }}>Automation</h3>
                <p className="card-text">Automation describes a wide range of technologies that reduce human intervention in processes. Human intervention is reduced by predetermining decision criteria, subprocess relationships, and related actions.</p>
                <div className="proj-btn">
                <button className="btnProj">Open</button>
                </div>
              </div>
            </div >
          </div>
        </div>
      </div>       
        </div>
  );
}

export default Projects;