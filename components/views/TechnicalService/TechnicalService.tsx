import { Button, Card, TechnicIcon } from "@/components";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./TechnicalService.css";

const inter = Inter({ subsets: ["latin"] });
const data = {
  img: {
    Href: "img/TechnicalService.png",
    alt: "TechnicalService",
  },
};

export function TechnicalServiceSection() {
  return (
    <section className="TechnicalService" data-orden="der-izq">
      <div className="TechnicalService-image TechnicalService-der">
        <Image
          src={data.img.Href}
          alt={data.img.alt}
          width={1792}
          height={1008}
        />
      </div>
      <div className="TechnicalService-content TechnicalService-izq">
        <h2>Servicio Técnico</h2>
        <p className={inter.className}>
          La atención a sus requerimientos será atendida por nuestro
          profesionales para que su experiencia sea única.
        </p>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <TechnicIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Baja prioridad</b>
              <br />
              El tiempo de respuesta estimado es de <b>24 hs</b>.
            </span>
          </div>
        </Card>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <TechnicIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Media prioridad</b>
              <br />
              El tiempo de respuesta estimado es de <b>12 hs</b>.
            </span>
          </div>
        </Card>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <TechnicIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Alta prioridad</b>
              <br />
              El tiempo de respuesta estimado es de <b>6 hs</b>.
            </span>
          </div>
        </Card>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <TechnicIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Máxima prioridad</b>
              <br />
              El tiempo de respuesta estimado es de <b>3 hs</b>.
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
}
