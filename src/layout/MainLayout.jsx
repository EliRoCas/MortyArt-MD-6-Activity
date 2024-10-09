import PropTypes from "prop-types";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header className="header" />
      <main className="content">{children}</main>
      <Footer className="footer" />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
