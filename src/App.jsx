import Home from "./sections/Home";
import Header  from "./sections/Header";
import Skills from "./sections/skills";
import Projects  from "./sections/projects";
import Education from "./sections/Education";
import {Contact} from "./sections/contact";
import Footer from "./sections/footer";

import "./css/App.css";
import "./css/sections.css"

function App() {

  return (
    <>
      <Header />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
