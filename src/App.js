import React, { useEffect, useState } from "react";
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

const colors = {
  lilaush: "#7839C4",
  azulush: "#4951F2",
  fondoblanco: "#F6F3E8",
  verdeush: "#72F285",
  textonegro: "#393939",
  rosaush: "#F29BCB",
  amarillo: "#F2CB05",
  rojoush: "#F24607",
  grisclaro: "#3939394D",
};

const theme = {
  dark: {
    nombre: "dark",
    fondo: colors.textonegro,
    texto: colors.fondoblanco,
    contacto: colors.verdeush,
    borde: colors.verdeush,
  },
  light: {
    nombre: "light",
    fondo: colors.fondoblanco,
    texto: colors.textonegro,
    contacto: colors.azulush,
    borde: colors.lilaush,
  },
};

function App() {
  const initialState = () => {
    const savedMode = localStorage.getItem("mode");

    if (savedMode) {
      return savedMode;
    } else {
      return "light";
    }
  };

  const [mode, setMode] = useState(initialState());

  const themeToggler = () => {
    let local = mode === "light" ? "dark" : "light";

    setMode(local);
    localStorage.setItem("mode", local);
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
