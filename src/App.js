import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import StickySocial from "./components/StickySocial";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App  font-[montserrat] bg-[#FBF8F1]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Muhammad Mario Wijatmika</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
