"use client"
import React ,{useState}  from "react";
import Navbar from "./component/Navbar";
import MobileNavbar from "./component/Mobile/MobileNavbar";
import HomePage from "./component/Home";
import AboutPage from "./component/About";
import ContactPage from "./component/contact";



export default function Home() {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)
   return (
   <div>

    {/* MobileNavbar */}
    <MobileNavbar  nav={nav} closeNav={closeNav}/>

    {/* Dstrok Navbar */}
    <Navbar openNav={openNav}/>


    {/* Home */}
    <HomePage/>

    {/* About */}
    <AboutPage/>

    {/* contactContainer */}
    <ContactPage/>



   </div>
  );
}