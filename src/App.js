import {Outlet, Link} from "react-router-dom";
import React  from 'react';
import "./nav.css";
import "./general.css";
import Typed from 'typed.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useEffect } from "react";

function App() {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSRulePlugin);
  let rule1 = CSSRulePlugin.getRule("body:after");


  useEffect(() => {
    var tl = gsap.timeline({repeat: 0});
    tl.from(".header", {y: 40, opacity: 0, duration: 1});
    tl.from(rule1, {cssRule: {opacity: "0"}, duration: 0.4}, "-=0.5");
    tl.from("#quote", {y: 40, opacity: 0, duration: 0.7}, "-=0.1");
    ScrollTrigger.create({
      animation: tl,
      trigger: "#quote",
      toggleActions: "restart restart restart restart"
    });
  })

  useEffect(() => {
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
