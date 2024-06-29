
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navlink.css';
import logo from "./pictures/logo.png"

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src = {logo} style={{height:"5vh",width : "8vh"  ,paddingLeft : "1vh"}}/>
      <a className="navbar-brand nav-font fw-bold" href="#">SiBot</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-link-custom fw-bold" href="#project">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-custom fw-bold" href="#goals">Why</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-custom fw-bold" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-custom fw-bold" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default Navbar;
