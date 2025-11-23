import { useState, useEffect, useRef } from "react";

const tabs = [
  {
    title: "🐶 Pet Profiles",
    text: "Create profiles with age, breed, and notes.",
  },
  { title: "💉 Vaccination", text: "Record vaccine dates and reminders." },
  { title: "📅 Appointments", text: "Set alerts for vet visits and grooming." },
  { title: "💊 Medications", text: "Track treatments, dosage, schedules." },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const progressRef = useRef(null);

  // Auto-switch every 5 seconds
  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % tabs.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  // Run animation on tab switch
  useEffect(() => {
    if (!progressRef.current) return;

    const el = progressRef.current;

    // Reset width instantly
    el.style.transition = "none";
    el.style.width = "0%";

    // Force reflow (CRITICAL)
    void el.offsetWidth;

    // Start animation
    el.style.transition = "width 5s linear";
    el.style.width = "100%";
  }, [active]);

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 id="features-heading">Our Features</h2>
        <p id="features-subheading">
          Organize, track, and simplify your pet’s health care with these tools.
        </p>

        <div className="feature-tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-btn ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {tab.title}

              {active === index && (
                <span className="progress" ref={progressRef}></span>
              )}
            </button>
          ))}
        </div>

        <div className="features-grid">
          <div className="feature">
            <h3>{tabs[active].title.replace(/^[^a-zA-Z]+/, "")}</h3>
            <p>{tabs[active].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
