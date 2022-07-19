import {Outlet, Link} from "react-router-dom";
import React  from 'react';
import "./nav.css";
import "./general.css";
import Typed from 'typed.js';


function App() {
  React.useEffect(() => {
    var data = {
      strings: ["Programming enthusiast", "Soccer Player", "Middle Schooler", "Chess Professional", "Sleep Ninja"],
      shuffle: true,
      backDelay: 1600,
      loop: true,
      loopCount: Infinity,
      typeSpeed: 50,
      backSpeed: 20,
    };
    new Typed('#animated-text', data);
  })

  return (
    <>
      <h1 class="header">Coson Lu</h1>
      <p id="quote"><span id="animated-text"></span></p>
      <nav>
        <Link to="/" class="nav-item"  onClick={() => {
          window.scroll(0, 0)
        }}>About Me</Link>
        <Link to="/blog" class="nav-item" onClick={() => {
          window.scroll(0, 0)
        }}>Blog</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
