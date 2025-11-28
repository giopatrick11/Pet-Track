// pages/ProjectList.jsx
import { Link } from "react-router-dom";

export default function ProjectList({ projects, changeStatus }) {
  return (
    <main className="container">
      <h1>Project List</h1>

      {projects.map((p) => (
        <div
          key={p.id}
          style={{
            padding: "12px",
            margin: "12px 0",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2>{p.title}</h2>
          <p>Status: {p.status}</p>

          <Link to={`/project/${p.id}`}>View Details</Link>

          <button
            onClick={() => changeStatus(p.id)}
            style={{ marginLeft: "10px" }}
          >
            Change Status
          </button>
        </div>
      ))}
    </main>
  );
}
