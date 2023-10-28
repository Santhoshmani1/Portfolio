import { FaGithub } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import Animate from "./AnimateComponent";
const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2>Projects</h2>
        <div id="projects-container">
          <Animate>
            <section className="project">
              <div className="proj-details">
                <div className="proj-title">
                  Blog with Typescript & Next JS with Notion as CMS
                </div>
                <div className="proj-description">
                  {" "}
                  Built a responsive blog application using TS and Notion for
                  content management.
                  <div className="features">
                    <h3>Features</h3>
                    <li>Rich text support using Markdown</li>
                    <li>
                      Responsive & optimised view for small screen devices
                    </li>
                  </div>
                </div>
                <div className="project-links-container">
                  <div className="view-live">
                    <button className="project-btn">
                      <a
                        href="https://blog.santhoshmani.tech"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View live <FaEarthAsia />
                      </a>
                    </button>
                  </div>
                  <div className="view-source">
                    <button className="project-btn">
                      <a
                        href="https://www.github.com/santhoshmani1/blog"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View source <FaGithub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </Animate>

          <Animate>
            <section className="project">
              <div className="proj-details">
                <div className="proj-title">Clear Space</div>
                <div className="proj-description">
                  Clear space is a chrome extension which helps users from
                  getting distracted and helps to stay focussed.
                  <div className="features">
                    <h3>Features</h3>
                    <li>Removes interactions with Youtube shorts</li>
                    <li>Blocks watch recommendations and Comments sections </li>
                  </div>
                </div>
                <div className="project-links-container">
                  <div className="view-source">
                    <button className="project-btn">
                      <a
                        href="https://www.github.com/Santhoshmani1/Clear-space"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View source <FaGithub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Projects;
