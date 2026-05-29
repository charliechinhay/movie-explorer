import { useNavigate } from "react-router-dom";
import "./Landing.css";

const features = [
  { icon: "🔍", label: "Search", desc: "Milioni di film" },
  { icon: "🔥", label: "Trending", desc: "Aggiornato ogni giorno" },
  { icon: "❤️", label: "Favorites", desc: "Salva i tuoi preferiti" },
  { icon: "⭐", label: "Ratings", desc: "Voti e recensioni" },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-badge">🎬 Powered by TMDB</div>
      <h1 className="landing-title">Movie Explorer</h1>
      <p className="landing-description">
        Discover movies, explore details, and manage your favorites all in one
        place. Start your cinematic journey now!
      </p>
      <button className="landing-button" onClick={() => navigate("/home")}>
        Get Started →
      </button>

      <div className="landing-features">
        {features.map((f) => (
          <div key={f.label} className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <span className="feature-label">{f.label}</span>
            <span className="feature-desc">{f.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
