import Image from "next/image";
import "./Services.css";
import { Inter } from "next/font/google";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { CheckIcon } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });
const data = {
  img: {
    Href: "/img/Services.png",
    alt: "",
  },
};

function ServicesSection() {
  return (
      <section className="Services" data-orden="der-izq">
        <div className="Services-image Services-der">
          <Image
            src={data.img.Href}
            alt={data.img.alt}
            width={1792}
            height={1008}
          />
        </div>
        <div className="Services-content Services-izq">
          <h2>Nuestros servicios</h2>
          <p className={inter.className}>En que te podemos ayudar</p>
          <Card cardType="horizontal">
            <div className="Card-Button">
              <Button buttonType="icon">
                <CheckIcon />
              </Button>
            </div>
            <div className="Card-info">
              <span className={inter.className}>
                <b>E-commerce</b>
                <br />
                Con nuestros servicios podrás contar con una{" "}
                <b>
                  tienda en línea
                  <br /> optimizada
                </b>{" "}
                y lista para <b>maximizar tus ventas</b>.
              </span>
            </div>
          </Card>
          <Card cardType="horizontal">
            <div className="Card-Button">
              <Button buttonType="icon">
                <CheckIcon />
              </Button>
            </div>
            <div className="Card-info">
              <span className={inter.className}>
                <b>SEO</b>
                <br />
                Nuestro equipo de expertos se asegurará de que tu{" "}
                <b>e-commerce</b>
                <br />
                aparezca en los <b>primeros resultados</b> de los <b> motores de búsqueda</b>.
              </span>
            </div>
          </Card>
          <Card cardType="horizontal">
            <div className="Card-Button">
              <Button buttonType="icon">
                <CheckIcon />
              </Button>
            </div>
            <div className="Card-info">
              <span className={inter.className}>
                <b>Community Management</b>
                <br />
                Nos encargamos de <b>gestionar tus redes sociales,</b> creando
                una
                <br />
                <b>comunidad activa</b> y comprometida con tu marca.
              </span>
            </div>
          </Card>
        </div>
      </section>
  );
}

export default ServicesSection;
