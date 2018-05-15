import React, { Component } from "react";
import "./App.css";
import NavbarBar from "./components/AppBar";
import Panier from "./components/Panier";

class AppBar extends Component {
  render() {
    return (
      <div className="App">
        <NavbarBar />
        <Panier />
      </div>
    );
  }
}

export default AppBar;
