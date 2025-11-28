// pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Project not found.</p>;

  return (
    <main className="container">
      <h1>{project.title}</h1>
      <p>Status: {project.status}</p>

      <Link to="/projects">⬅ Back to List</Link>
    </main>
  );
}
