export const Home = () => {
  return (
    <>
      <section id="home">
        <div id="home-container">
          <div className="section-title">
            <h2>Home</h2>
          </div>
          <div className="section-content home-content">
            I am an second year Engineering undergraduate student from Andhra
            pradesh, India.
            <div className="home-interests">
              I build full stack web applications and loves to explore and learn
              about technology.
            </div>
            <div className="home-cta">
              Open for full time internship opportunities in frontend web
              development and Machine learning.
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
