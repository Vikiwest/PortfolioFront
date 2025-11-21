import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/nav";
import Herosection from "./components/herosection/hero";
import Experience from "./components/Experience/experience"; 
import Projects from "./components/Projectsection/projects";
import Form from "./components/Form/form";
import Footer from "./components/footer";
import About from "./components/pages/about";
import Skills from "./components/Skills/skills";
import "./App.css";

// Loading spinner component
const LoadingSpinner = () => (
  <div id="loading-screen" className="">
    <div id="dots">
      <div id="dot"></div>
      <div id="dot"></div>
      <div id="dot"></div>
    </div>
    <p>Loading...</p>
  </div>
);

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Show loading on route change
    const timeout = setTimeout(() => {
      setLoading(false); // Hide loading after delay
    }, 1500);
    return () => clearTimeout(timeout);
  }, [location.pathname]); // Re-run effect on route change

  return (
    <div className="min-h-screen bg-[#000000]">
      {" "}
      {/* Add background here */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Herosection />
                  <Skills />
                  <Experience /> {/* Add Experience section here */}
                  <Projects />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Form />} />
            {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
