import Landing from "./pages/Landing";
import { About } from "./pages/About";
import { BrowserRouter } from "react-router-dom";
import { Contract } from "./pages/Contract";
import { Projects } from "./pages/Projects";
import { Footer } from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Landing />
        <div className="h-10 sm:h-40 md:h-96 bg-white"></div>
        <About />
        <div className="h-10 sm:h-40 md:h-96 bg-white"></div>
        <Projects/>
        <div className="h-10 sm:h-40 md:h-96 bg-white"></div>
        <Contract/>
        <div className="h-10 sm:h- md:h-20 bg-white"></div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
