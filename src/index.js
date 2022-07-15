import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App.js';
import About from './About.js';
import Blog from './Blog.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
function All() {
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<About/>}/>
          <Route path="blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <All/>
)
