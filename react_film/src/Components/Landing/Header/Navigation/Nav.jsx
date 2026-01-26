import { Menu , X} from "lucide-react";
import React, { Component, useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className=" flex justify-between items-center text-slate-300">
        <div className="flex gap-8 uppercase items-center">
          <h1 className="font-bold text-2xl">Hyper<span className="text-rose-600">Movie</span></h1>

          <ul className=" gap-4 hidden md:flex">
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Tvshows</a>
            </li>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
        <div className="ml-auto uppercase">
          <ul className=" gap-4 hidden md:flex">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a
                className="bg-rose-700 px-4 py-2 rounded-2xl hover:bg-rose-800 text-white"
                href="#"
              >
                SignUp
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-screen bg-slate-900 text-white z-50
        transform transition-transform duration-300 ease-in-out md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 p-6 uppercase text-sm">
          <li>
            <a className="hover:text-rose-500 transition" href="#">
              Movies
            </a>
          </li>
          <li>
            <a className="hover:text-rose-500 transition" href="#">
              Tv Shows
            </a>
          </li>
          <li>
            <a className="hover:text-rose-500 transition" href="#">
              People
            </a>
          </li>
          <li>
            <a className="hover:text-rose-500 transition" href="#">
              More
            </a>
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-slate-700 mx-6" />

        {/* Auth Buttons */}
        <div className="p-6 flex flex-col gap-4 mt-auto">
          <a
            href="#"
            className="text-center hover:text-rose-400 transition"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-rose-600 py-2 rounded-xl text-center hover:bg-rose-700 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}
