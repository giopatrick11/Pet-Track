import devPhoto from "../assets/dev.jpg";

export default function Team() {
  return (
    <main>
      <section className="team-section">
        <div className="team-container">
          <h1>👥 Meet the Developer</h1>
          <p className="team-intro">
            Behind <strong>Pet Track</strong> is a driven developer passionate
            about clean design, usability, and technology-driven systems.
          </p>

          <div className="profile-card">
            <div className="profile-photo">
              <img src={devPhoto} alt="Developer" />
            </div>

            <div className="profile-info">
              <h2>Gio Patrick G. Cimeni</h2>
              <p className="role">Developer · UI/UX Designer · Researcher</p>
              <p className="bio">
                A BS Information Technology student passionate about creating
                seamless, intuitive, and efficient digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
