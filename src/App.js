import {Outlet, Link} from "react-router-dom";
import React  from 'react';
function App() {
  return (
    <>
      <nav>
        <Link to="/">About!!</Link>
        <Link to="/blog">Blog!!</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
