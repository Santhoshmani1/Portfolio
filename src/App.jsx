import Home from "./sections/Home";
import Header from "./sections/Header";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Education from "./sections/Education";
import { Contact } from "./sections/contact";
import Footer from "./sections/footer";
import AnimateSection from "./sections/AnimateSection";
import "./css/App.css";
import "./css/sections.css";

function App() {
  const AnimatedHome = AnimateSection(Home);
  const AnimatedEducation = AnimateSection(Education);
  const AnimatedSkills = AnimateSection(Skills);
  const AnimatedProjects = AnimateSection(Projects);
  const AnimatedContact = AnimateSection(Contact);

  return (
    <>
      <Header />
      <AnimatedHome />
      <AnimatedEducation />
      <AnimatedSkills />
      <AnimatedProjects />
      <AnimatedContact />
      <Footer />
    </>
  );
}

export default App;
