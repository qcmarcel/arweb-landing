"use client";
import "./Header.css";
import { Logo } from "../Logo";
import { HamburgerIcon } from "@/components/icons";
import { useState, useEffect } from "react";

type MouseEventHandler<T> = React.MouseEventHandler<T>;

function Header() {
  const [mobileMenuState, setMobileMenuState] = useState<
    "open" | "closing" | "closed"
  >("closed");

  const handlerClick = () => {
    console.log(mobileMenuState);
    if (mobileMenuState === "open") {
      handlerClose();
    } else if (mobileMenuState === "closed") {
      setMobileMenuState("open");
    }
  };
  const handlerClose = () => {
    if (mobileMenuState === "closed") return;
    setMobileMenuState("closing");
    setTimeout(() => {
      setMobileMenuState("closed");
    }, 300);
  };

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
        <div
          className={
            "Header-Links" +
            (mobileMenuState === "open" ||
            mobileMenuState === "closing" ||
            mobileMenuState === "closed"
              ? " " + mobileMenuState
              : "")
          }
        >
          <div className="Header-Links-container">
            <a onClick={handlerClose} href="#about">
              Nosotros
            </a>
            <a onClick={handlerClose} href="#pricing">
              Planes
            </a>
            <a onClick={handlerClose} href="#contact">
              Contacto
            </a>
          </div>
        </div>
        <div className="Header-Menu-Mobile">
          <button onClick={handlerClick}>
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
