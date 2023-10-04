import { Header } from "./sections/Header";
import { Home } from "./sections/Home";
import {Contact} from "./sections/contact";
import Footer from "./sections/footer";
import { Projects } from "./sections/projects";
import Skills from "./sections/skills";

import "./css/App.css";
import "./css/sections.css"
import Education from "./sections/Education";

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
