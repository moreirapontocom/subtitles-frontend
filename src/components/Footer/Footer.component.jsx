import "./Footer.component.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          &copy; {new Date().getFullYear()} Lucas &middot; All rights reserved. | Powered by React.
        </div>
      </footer>
    </>
  );
};

export default Footer;
