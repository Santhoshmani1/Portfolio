const Home = () => {
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
                I enjoy building web apps using Javascript and Node JS.
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

export default Home;