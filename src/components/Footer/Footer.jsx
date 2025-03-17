import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FooterAnimation } from "../../Utility/animations";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      variants={FooterAnimation(0)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }} 
    >
      <p className="Copyright">© 2025 AWSS</p>

      <motion.div 
        className="footer-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link to="/">About</Link>
        <Link to="/Our Model">Our Model</Link>
        <Link to="/">Contact</Link>
      </motion.div>

      <motion.div 
        className="footer-socials"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a href="https://www.linkedin.com/in/shauviqmishra/" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 300 }}>
            <FaLinkedin />
          </motion.div>
        </a>
        <a href="https://www.instagram.com/shauviqmishra/" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 300 }}>
            <FaInstagram />
          </motion.div>
        </a>
        <a href="https://github.com/Shauviq/AWSS" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 300 }}>
            <FaGithub />
          </motion.div>
        </a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
