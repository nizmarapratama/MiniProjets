import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponents } from './components';
import { Home, Sukses, About } from './pages';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponents />
          <main>
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/sukses" element={<Sukses/>} />
              <Route  path="/about" element={<About/>} />
            </Routes>
          </main>
      </BrowserRouter>
    )
  }
}