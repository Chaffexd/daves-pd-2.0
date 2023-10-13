import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="p-8 h-24 flex items-center sticky overflow-hidden top-0 bg-white w-full">
      <nav className="w-full flex justify-between">
        <div>
            <h1 className="text-3xl"><NavLink to={"/"}>Dave's Painting & Decorating</NavLink></h1>
        </div>
        <div className="flex items-center">
          <ul className="flex">
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
