import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProjectsContainer from "./components/Projects/ProjectsContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <ProjectsContainer/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
