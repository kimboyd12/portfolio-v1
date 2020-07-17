import React from "react"
import "./App.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Route } from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Body />
      {/* <Footer /> */}

    </div>
  )
}
