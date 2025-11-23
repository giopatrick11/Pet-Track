import FeatureTabs from "../components/FeatureTabs.jsx";

export default function Home() {
  return (
    <main>
      {/* Notice the added class home-hero */}
      <section className="hero home-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Pet Track — A simple pet care dashboard</h1>
            <p className="lead">
              Manage pet profiles, vaccinations, reminders, and medications in
              one clean, mobile-friendly app concept built for your final
              project.
            </p>
            <p>
              <a className="btn" href="#features">
                Explore Features
              </a>
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="pet-placeholder">🐾</div>
          </div>
        </div>
      </section>

      <FeatureTabs />
    </main>
  );
}
