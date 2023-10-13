import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="lg:p-8 h-24 lg:flex lg:items-center lg:sticky lg:overflow-hidden lg:top-0 bg-white w-full">
      <nav className="w-full lg:flex justify-between">
        <div>
            <h1 className="text-3xl text-center mt-4 lg:mt-0 mb-4 lg:mb-0"><NavLink to={"/"}>Dave's Painting & Decorating</NavLink></h1>
        </div>
        <div className="flex items-center">
          <ul className="flex justify-center w-full">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="ml-4">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="ml-4">
              <NavLink to={"/work"}>Work</NavLink>
            </li>
            <li className="ml-4">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
