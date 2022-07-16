import {Outlet, Link} from "react-router-dom";
import React  from 'react';
import "./nav.css";
import "./general.css";



function App() {


  return (
    <>
      <h1 class="header">Coson Lu</h1>
      <nav>
        <Link to="/" class="nav-item">About Me</Link>
        <Link to="/blog" class="nav-item">Blog</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
