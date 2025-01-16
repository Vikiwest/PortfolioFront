import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/nav";
import Herosection from "./components/herosection/hero";
import Projects from "./components/Projectsection/projects";
import Form from "./components/Form/form";
import Footer from "./components/footer";
import About from "./components/pages/about";
import Skills from "./components/Skills/skills";
import './App.css';

// Loading spinner component
const LoadingSpinner = () => (
  <div id="loading-screen">
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
        setLoading(true);  // Show loading on route change
        const timeout = setTimeout(() => {
            setLoading(false);  // Hide loading after delay
        }, 1500);
        return () => clearTimeout(timeout);
    }, [location.pathname]);  // Re-run effect on route change

    return (
        <>
            {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                <Navbar />
                    {location.pathname === '/' && <Herosection />}                 
                    <Routes>
                        <Route path="/" element={<><Herosection /><Skills /><Projects /></>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Form />} />
                        {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
                    </Routes>
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
