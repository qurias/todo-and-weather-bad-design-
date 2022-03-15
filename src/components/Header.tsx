import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Todo</Link>
      <Link to="/weather">Weather</Link>
    </nav>
  );
}

export default Header