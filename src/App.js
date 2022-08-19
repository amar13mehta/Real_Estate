import { Route, Routes } from "react-router-dom";

import Foot from "./components/Foot";
import Head from "./components/Head";
import Home from "./pages/Home";
import React from "react";

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
