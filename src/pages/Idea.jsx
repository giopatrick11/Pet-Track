import { useState } from "react";

export default function Idea() {
  const problem = `Many pet owners lose track of their pets’ critical health data such as vaccination dates, medical treatments, and vet appointments. This leads to missed schedules, incomplete records, and difficulty sharing information with veterinarians.`;

  const solution = `Pet Track will be a lightweight web app that allows users to create pet profiles, log medical records, and set reminders for medications and vet visits.`;

  const [showSolution, setShowSolution] = useState(false);

  return (
    <main>
      <section className="idea-section">
        <div className="idea-container">
          <h1>💡 Project Idea: Pet Track</h1>

          <p className="intro">{showSolution ? solution : problem}</p>

          <button
            className="btn"
            onClick={() => setShowSolution((prev) => !prev)}
          >
            {showSolution ? "Show Problem ❓" : "Show Solution 💡"}
          </button>

          <hr />

          <h2>🛠️ Scope & Technology</h2>
          <ul>
            <li>
              <strong>Front-end:</strong> HTML, CSS, JavaScript
            </li>
            <li>
              <strong>Back-end:</strong> REST API
            </li>
            <li>
              <strong>Database:</strong> MySQL or Firebase
            </li>
          </ul>

          <h2>📈 Expected Outcome</h2>
          <p>
            The final version will offer an intuitive dashboard interface for
            managing multiple pets.
          </p>
        </div>
      </section>
    </main>
  );
}
