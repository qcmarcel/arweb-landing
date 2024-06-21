import Image from "next/image";
import { Button } from "@/components/common/Button";
import "./Hero.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function HeroSection() {
  return (
    <section className="Hero">
      <div className="Hero-content">
        <h1>Te ayudamos a crecer y potenciar el éxito de tu negocio</h1>
        <p className={inter.className}>
          Ofrecemos soluciones completas para llevar tu negocio al siguiente
          nivel
        </p>
        <div>
          <Button buttonType="solid" href="#">
            <span>Conoce más</span>
          </Button>
          <Button buttonType="outline" href="#">
            <span>Solicita tu demo</span>
          </Button>
        </div>
      </div>
      <div className="Hero-image">
        <Image src="/img/HeroMen.png" alt="" width={1792} height={1008} />
        <div className="Hero-image-triangles">
          <div id="Hero-image-triangles_1"></div>
          <div id="Hero-image-triangles_2"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
