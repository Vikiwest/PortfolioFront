import { Routes, Route, useLocation } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/navbar/nav";
import Herosection from "./components/herosection/hero";
import Projects from "./components/Projectsection/projects";
import Form from "./components/Form/form";
import Footer from "./components/footer";
import About from "./components/pages/about"; // Import your About component
import Skills from "./components/Skills/skills";
import './App.css';

function App() {
  const location = useLocation(); // Get the current location
  return (
    <>
      <Navbar />
      {location.pathname === '/' && <Herosection />}
      <Routes>
      <Route path="/" element={<><Herosection /><Skills/><Projects /></>} /> {/* Home page with Herosection and Projects */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Form />} />
        {/* <Route path="/about" element={<Form />} /> */}
      </Routes>
  


      <Footer />
    </>
  );
}

export default App;
