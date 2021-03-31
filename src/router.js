import React from "react";
import Users from "./components/Users";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";

const routes = {
//   "/": () => <Home />,
  "/user": () => <Users />,
  "/about": () => <About />,
  "/contact": () => <Contact />
};

export default routes;