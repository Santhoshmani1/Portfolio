import { FaXTwitter, FaEarthAmericas } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="social-container">
            <a
              href="https://github.com/santhoshmani1"
              rel="noreferrer"
              target="_blank"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.github.vom/santhoshmani1"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.in/santhoshmanip"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="https://www.example.com" rel="noreferrer" target="_blank">
              <FaEarthAmericas />
            </a>
          </div>
          <div className="copyright-container">
            <div className="copyright-text">
                &copy; Santhosh Mani 2023
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
