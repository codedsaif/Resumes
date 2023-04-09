import Navbar from "./components/Navbar/Navbar"; // Completed
import Intro from "./components/Intro/Intro"; // Approx Completed
import Services from "./components/Services/Services"; // Approx Completed
import "./App.css";
import Experience from "./components/Experience/Experience"; // Approx Complete
import Works from "./components/Works/Works"; // working
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial"; //Approx Complete
import Contact from "./components/Contact/Contact"; // completed
import Footer from "./components/Footer/Footer"; // Completed
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
