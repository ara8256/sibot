// import PropTypes from 'prop-types'
// import "./navlink.css"
// function Navbar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand nav-font fw-bold" href="#">SiBot</a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >        <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse d-flex justify-content-end  me-5" id="navbarNav">
        
//         <ul className="navbar-nav">
//           <li className="nav-item ">
//             <a className="nav-link nav-link-custom fw-bold" href="#project">Projects</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link nav-link-custom fw-bold" href="#goals">Goals</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link nav-link-custom fw-bold" href="#contact">Conatct</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// Navbar.prototype={
//   title:PropTypes.string.isRequired,
//   about:PropTypes.string.isRequired
// }

// // Navbar.defaultProps={
// //   title:"Set Title",
// //   about:"Set About"
// // }

// export default Navbar;


import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navlink.css';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <a className="nav-link nav-link-custom fw-bold" href="#goals">Goals</a>
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
