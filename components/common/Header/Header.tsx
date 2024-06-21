"use client";
import "./Header.css";
import Image from "next/image";
import { Logo } from "../Logo";
import { HamburgerIcon } from "@/components/icons";
<<<<<<< HEAD

=======
import { useState, useEffect } from "react";

type MouseEventHandler<T> = React.MouseEventHandler<T>;
>>>>>>> b2834b43cb0ff262c9c1456f215e0fa407a51a01

function Header() {
  const [mobileMenuState, setMobileMenuState] = useState<
    "open" | "closing" | "closed"
  >("closed");

  const headerLinksMobileClassName = `Header-Links-Mobile ${mobileMenuState}`;
  const handlerClick = () => {
    if (mobileMenuState === "open") {
      setMobileMenuState("closing");
      handlerClose();
    } else if (mobileMenuState === "closed") {
      setMobileMenuState("open");
    }
  };
  const handlerClose = () => {
    setTimeout(() => {
      setMobileMenuState("closed");
    }, 300);
  };
  console.log(mobileMenuState);
  useEffect(() => {
    if (mobileMenuState === "open") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuState]);
  return (
    <header className="Header">
      <div className="Header-container">
        <div className="Header-Logo">
          <a href="/">
            <Logo text />
          </a>
        </div>
        <div className="Header-Links">
          <button className="Header-Links-Mobile-Btn" onClick={handlerClick}>
            <HamburgerIcon />
          </button>
          <div className={headerLinksMobileClassName}>
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
