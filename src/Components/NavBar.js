// import React from "react";
// import { NavLink } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         {/* <NavLink to="/" className="navLink">
//           Home
//         </NavLink> */}
//         <NavLink to="/" className="navLink">
//           Play
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;

import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="navContainer">
      <ul className="navbar">
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="game" spy={true} smooth={true}>
            Play
          </Link>
        </li>
        {/* <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="service" spy={true} smooth={true}>
            Service
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
