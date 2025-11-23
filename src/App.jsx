import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Idea from "./pages/Idea.jsx";
import Team from "./pages/Team.jsx";

import "./assets/styles.css";

export default function App() {
  return (
    <>
      {/* Prop passing requirement */}
      <Header title="Pet Track Project" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </>
  );
}
