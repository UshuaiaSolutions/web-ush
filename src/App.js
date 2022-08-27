import React from "react";
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

const theme = {
  lilaush: "#7839C4",
  azulush: "#4951F2",
  fondo: "#F6F3E8",
  verdeush: "#72F285",
  textonegro: "#393939",
  rosaush: "#F29BCB",
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Layout>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
