"use client";
import Image from "next/image";
import "./Header.css";
import { Logo } from "../Logo";
import HamburgerIcon from "@/components/icons/Hamburger";

function Header() {
  return (
    <header className="Header">
      <div className="Header-container">
        <div className="Header-Logo">
          <Logo text />
        </div>
        <div className="Header-Links">
          <button className="Header-Links-Mobile-Btn">
            <HamburgerIcon />
          </button>
          <div className="Header-Links-Mobile">
            <a href="#about">Nosotros</a>
            <a href="#pricing">Planes</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
