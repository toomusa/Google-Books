import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to='/home'>
        Home
      </Link>
    </nav>
  );
}

export default Nav;
