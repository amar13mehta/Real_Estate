import { Route, Routes } from "react-router-dom";

import Foot from "./components/Foot";
import Head from "./components/Head";
import Home from "./pages/Home";
import Property from "./pages/Property";
import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="mx-w-[1440px] mx-auto bg-white">
      <Head />
      <Home/>

      <Foot />
    </div>
  );
};

export default App;
