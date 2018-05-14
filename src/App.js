import React, { Component } from "react";
import "./App.css";
import NavbarBar from "./components/AppBar";
import ListOfArticle from "./components/ListArticle";

class AppBar extends Component {
  render() {
    return (
      <div className="App">
        <NavbarBar />

        <ListOfArticle />
      </div>
    );
  }
}

export default AppBar;
