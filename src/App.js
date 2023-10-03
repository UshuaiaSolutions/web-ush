import React, { useState } from "react";
import "./App.css";
import "./styles/fonts.css";
import "./styles/spaces.css";
import "./styles/alignment.css";
import "./styles/sizes.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/menues/Header";
import Footer from "./components/menues/Footer";
import Layout from "./components/base/Layout";
import Home from "./pages/home";
import Contacto from "./pages/contacto";
import Expertise from "./pages/expertise";
import Services from "./pages/services";
import About from "./pages/about";
import NoMatch from "./pages/nomatch";
import ScrollToTop from "./components/base/ScrollToTop";
import USHBlog from "./pages/ush-blog";

const theme = {
  // lilaush: "#7839C4",
  // azulush: "#4951F2",
  // fondoblanco: "#F6F3E8",
  // verdeush: "#72F285",
  // textonegro: "#393939",
  // rosaush: "#F29BCB",
  // amarillo: "#F2CB05",
  // rojoush: "#F24607",
  // grisclaro: "#3939394D",

  dark: {
    fondo: "#393939",
    texto: "#F6F3E8",
  },
  light: {
    fondo: "#F6F3E8",
    texto: "#393939",
  },
};

function App() {
  const [mode, setMode] = useState("light");

  const themeToggler = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <Router>
      <ThemeProvider theme={mode === "light" ? theme.light : theme.dark}>
        <ScrollToTop />
        <Header toggler={themeToggler} />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/ush-blog" element={<USHBlog />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Layout>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
