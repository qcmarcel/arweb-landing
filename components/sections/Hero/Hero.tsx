"use client";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import "./Hero.css";

function HeroSection() {
  return (
    <section className="Hero">
      <div className="Hero-content">
        <h1>Te ayudamos a crecer y potenciar el éxito de tu negocio</h1>
        <p>
          Ofrecemos soluciones completas para llevar tu negocio al siguiente
          nivel
        </p>
        <div className="Hero-content-buttons">
          <Button buttonType="solid" href="#">
            Conoce más
          </Button>
          <Button buttonType="outline" href="#">
            Solicita tu demo
          </Button>
        </div>
      </div>
      <div className="Hero-image">
        <Image src="/img/HeroMen.png" alt="" width={1792} height={1008} />
      </div>
    </section>
  );
}

export default HeroSection;
