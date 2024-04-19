import React from "react";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-20 py-4 shadow-xl bg-zinc-800 text-gray-300">
      <div className="logo">
        <img
          className="w-32 rounded-md cursor-pointer"
          src={logoImg}
          alt="Logo"
        />
      </div>
      <div className="">
        <ul className="flex space-x-4">
          <NavLink
            to="/"
            exact
            activeClassName="font-semibold text-zinc-100"
            className="text-xl font-semibold hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            activeClassName="font-semibold text-zinc-100"
            className="text-xl font-semibold hover:text-white"
          >
            About Us
          </NavLink>
          <NavLink
            to="/customers"
            activeClassName="font-semibold text-zinc-100"
            className="text-xl font-semibold hover:text-white"
          >
            All Customers
          </NavLink>
          <NavLink
            to="/transfer"
            activeClassName="font-semibold text-zinc-100"
            className="text-xl font-semibold hover:text-white"
          >
            Transfer Money
          </NavLink>
          <NavLink
            to="/services"
            activeClassName="font-semibold text-zinc-100"
            className="text-xl font-semibold hover:text-white"
          >
            Services
          </NavLink>
          <NavLink
            to="/contactus"
            activeClassName="font-semibold text-zinc-100"
            className="text-xl font-semibold hover:text-white"
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
