import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiGnubash,
  SiJira,
  SiGit,
  SiGithub,
} from "react-icons/si";
import Animate from "./AnimateComponent";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="skills-container">
          <h2>Skills</h2>
          <Animate>
            <div id="programming-languages">
              <h3>Programming Languages</h3>
              <div className="languages-container">
                <div className="skill language">
                  <div className="skill-icon">
                    <SiCplusplus style={{ color: "#069" }} />
                  </div>
                  <div className="skill-name">C++</div>
                </div>
                <div className="skill language">
                  <div className="skill-icon">
                    <SiJavascript style={{ color: "#f7e024" }} />
                  </div>
                  <div className="skill-name">Javascript</div>
                </div>
                <div className="skill language">
                  <div className="skill-icon">
                    <SiPython style={{ color: "#069" }} />
                  </div>
                  <div className="skill-name">Python</div>
                </div>
              </div>
            </div>
          </Animate>
          <Animate>
            <div id="web-technologies">
              <h3>Web Technologies</h3>
              <div className="web-skills-box">
                <div className="skill web">
                  <div className="skill-icon">
                    <SiReact style={{ color: "#66dbfb" }} />
                  </div>
                  <div className="skill-name">React js</div>
                </div>
                <div className="skill web">
                  <div className="skill-icon">
                    <SiNodedotjs style={{ color: "green" }} />
                  </div>
                  <div className="skill-name">Node js</div>
                </div>
                <div className="skill web">
                  <div className="skill-icon">
                    <SiHtml5 style={{ color: "#f88615" }} />
                  </div>
                  <div className="skill-name">HTML</div>
                </div>
                <div className="skill web">
                  <div className="skill-icon">
                    <SiCss3 style={{ color: "#069aed" }} />
                  </div>
                  <div className="skill-name">CSS</div>
                </div>
              </div>
            </div>
          </Animate>{" "}
          <Animate>
            <div id="tools">
              <h3>Tools & Software</h3>
              <div className="tools-box">
                <div className="skill tool">
                  <div className="skill-icon">
                    <SiGnubash />
                  </div>
                  <div className="skill-name">Bash</div>
                </div>
                <div className="skill tool">
                  <div className="skill-icon">
                    <SiJira style={{ color: "blue" }} />
                  </div>
                  <div className="skill-name">Jira</div>
                </div>
                <div className="skill tool">
                  <div className="skill-icon">
                    <SiGit style={{ color: "#fc4f28" }} />
                  </div>
                  <div className="skill-name">Git</div>
                </div>
                <div className="skill tool">
                  <div className="skill-icon">
                    <SiGithub />
                  </div>
                  <div className="skill-name">Github</div>
                  <div></div>
                </div>
              </div>
            </div>
          </Animate>{" "}
        </div>
      </section>
    </>
  );
};

export default Skills;
