import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import StickySocial from "./components/StickySocial";

function App() {
  return (
    <div className="App overflow-x-hidden font-[montserrat] bg-[#FBF8F1]">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
      <StickySocial />
    </div>
  );
}

export default App;
