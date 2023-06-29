import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import PortfolioContainer from "./components/Portfolio/PortfolioContainer";
import ScrollToTop from "react-scroll-to-top";
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <div>
      <div className="App background">
      <Header exact path="/emanuelpps" />
      <HashLink smooth to="#AboutMe">
      <ScrollToTop className="BackTopArrow" smooth/>
      </HashLink>
      <NavBar />
      <AboutMe />
      <PortfolioContainer />
      <ContactMe />
      <Footer />
      </div>
    </div>
  );
}

export default App;
