import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © 2026 <span className="footer-brand">Movie Explorer</span>. All
          rights reserved.
        </p>
        <p className="footer-credit">
          Developed by{" "}
          <a
            href="https://linkedin.com/in/charlie-chinchay-824393394"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Charlie Chinchay
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
