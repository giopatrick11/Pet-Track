// App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Idea from "./pages/Idea.jsx";
import Team from "./pages/Team.jsx";

import ProjectList from "./pages/ProjectList.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

import "./assets/styles.css";

export default function App() {
  // REQUIRED: state lives in parent
  const [projects, setProjects] = useState([
    { id: 1, title: "Pet Registration Module", status: "Pending" },
    { id: 2, title: "Medical Record Tracker", status: "In Progress" },
    { id: 3, title: "Vaccination Reminder System", status: "Completed" },
  ]);

  // REQUIRED: update function passed to children
  const changeStatus = (id) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Updated ✔️" } : p))
    );
  };

  return (
    <>
      <Header title="Pet Track Project" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/team" element={<Team />} />

        {/* Required Activity Pages */}
        <Route
          path="/projects"
          element={
            <ProjectList projects={projects} changeStatus={changeStatus} />
          }
        />

        <Route
          path="/project/:id"
          element={<ProjectDetail projects={projects} />}
        />
      </Routes>

      <Footer />
    </>
  );
}
