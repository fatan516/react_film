import React, { Component, useState } from "react";
import Navigation from "./Navigation/Nav";
import SearchBox from "./SearchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
// import bg from "../Header/headers_image/myke-simon-atsUqIm3wxo-unsplash.jpg";
export default function Header() {
    const[bg,setBg]=useState("/images/card6.jpg")
  return (
    <header
    className="bg-top bg-no-repeat bg-cover "
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('${bg}')`
    }}
  >  
      <div className="h-screen flex flex-col container mx-auto py-12 px-2 md:px-0">
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
}
