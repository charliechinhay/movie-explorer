import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="landing-title">Movie Explorer</h1>
      <p className="landing-description">
        Discover movies, explore details, and manage your favorites all in one
        place. Start your cinematic journey now!
      </p>
      <button className="landing-button" onClick={() => navigate("/home")}>
        Get Started
      </button>
    </div>
  );
}

export default Landing;
