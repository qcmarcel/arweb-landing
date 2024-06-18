"use client";
import Image from "next/image";
import "./Header.css";
import { Logo } from "../Logo";

function Header() {
  return (
    <header className="Header">
      <div className="Header-container">
        <div className="Header-Logo">
          <Logo text />
        </div>
        <div className="Header-Links">
          <a href="#about">Nosotros</a>
          <a href="#pricing">Planes</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
