import { FaGithub } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
export const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2>Projects</h2>
        <div id="projects-container">
          <section className="project">
            <div className="proj-details">
              <div className="proj-title">Blog with Typescript & Next JS</div>
              <div className="proj-description">
                {" "}
                Built a responsive blog application using TS and Notion for
                content management.
                <div className="features">
                  <h3>Features</h3>
                  <li>Rich text support using Markdown</li>
                  <li>Responsive & optimised view for small screen devices</li>
                </div>
              </div>
              <div className="project-links-container">
                <div className="view-live">
                  <button className="project-btn">
                    <a href="https://blog.santhoshmani.tech"  target="_blank" rel="noreferrer">
                      View live <FaEarthAsia />
                    </a>
                  </button>
                </div>
                <div className="view-source">
                  <button className="project-btn">
                    <a href="https://www.github.com/santhoshmani/blog" target="_blank" rel="noreferrer">
                      View source <FaGithub />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="project">
            <div className="proj-details">
              <div className="proj-title">Project Title</div>
              <div className="proj-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                doloribus eum molestiae voluptate praesentium nulla assumenda
                sint debitis accusamus tempora.
              </div>
              <div className="project-links-container">
                <div className="view-live">
                  <button className="project-btn">
                    <a href="https://www.example.com">
                      View live <FaEarthAsia />
                    </a>
                  </button>
                </div>
                <div className="view-source">
                  <button className="project-btn">
                    <a href="https://www.example.com">
                      View source <FaGithub />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </section>
    </>
  );
};
