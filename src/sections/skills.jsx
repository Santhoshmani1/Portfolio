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

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="skills-container">
          <h2>Skills</h2>
          <div id="programming-languages">
            <h3>Programming Languages</h3>
            <div className="languages-container">
              <div style={{color:"#069"}} className="skill language">
                <SiCplusplus />
              </div>
              <div style={{color:"#f7e024"}}className="skill language">
                <SiJavascript />
              </div>
              <div style={{color:"#069"}} className="skill language">
                <SiPython />
              </div>
            </div>
          </div>
          <div id="web-technologies">
            <h3>Web Technologies</h3>
            <div className="web-skills-box">
              <div style={{color:"#66dbfb"}}className="skill web">
                <SiReact />
              </div>
              <div style={{color:"green"}}className="skill web">
                <SiNodedotjs />
              </div>
              <div style={{color:"#f88615"}} className="skill web">
                <SiHtml5 />
              </div>
              <div style={{color:"#069aed"}} className="skill web">
                <SiCss3 />
              </div>
            </div>
          </div>
          <div id="tools">
            <h3>Tools & Software</h3>
            <div className="tools-box">
              <div className="skill tool">
                <SiGnubash />
              </div>
              <div style={{color:"blue"}}className="skill tool">
                <SiJira />
              </div>
              <div style={{color:"#fc4f28"}} className="skill tool">
                <SiGit />
              </div>
              <div style={{color:"black"}}className="skill tool">
                <SiGithub />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
