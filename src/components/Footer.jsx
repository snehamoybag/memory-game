import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__credits">
        &copy; Snehamoy Bag | {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
