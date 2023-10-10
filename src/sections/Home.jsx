export const Home = () => {
  return (
    <>
      <section id="home">
        <div id="home-container">
          <div className="section-title">
            <h2>Home</h2>
          </div>
          <div className="section-content home-content">
            <div className="home-introduction">
              Hello, My name is Santhosh Mani.
              <div className="home-intro">
                I like to solve problems with code and love to explore and learn about latest advancements in software development.  
              </div>
            </div>
            <div className="home-cta">
              Open for Internships and Hackathons Opportunities 
              <div className="cta-btns">
                <button className="cta-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/santhoshmani1"
                  >
                    Github
                  </a>
                </button>
                <button className="cta-btn">
                  <a href="#projects">View Projects</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
