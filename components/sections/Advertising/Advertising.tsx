import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { LikeIcon, NetworksIcon, ProductIcon, StoreIcon } from "@/components";
import "./Advertising.css";

const inter = Inter({ subsets: ["latin"] });
const data = {
  img: {
    Href: "/img/Advertising.png",
    alt: "Advertising",
  },
};

export function AdvertisingSection() {
  return (
    <section className="Advertising" data-orden="izq-der">
      <div className="Advertising-image Advertising-izq">
        <Image
          src={data.img.Href}
          alt={data.img.alt}
          width={1792}
          height={1008}
        />
      </div>
      <div className="Advertising-content Advertising-der">
        <h2>Tu e-commerce a tu medida</h2>
        <p className={inter.className}>Tu tienda lista en pocos pasos</p>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <ProductIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Carga tus productos</b>
              <br />
              Añade a la plataforma el stock de productos disponible.
            </span>
          </div>
        </Card>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <StoreIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Personaliza tu tienda</b>
              <br />
              Edición de tu e-commerce con el estilo de tu marca.
            </span>
          </div>
        </Card>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <NetworksIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Vincula tus redes</b>
              <br />
              Enlaces personalizados para que tus clientes accedan a tus redes
              sociales.
            </span>
          </div>
        </Card>
        <Card cardType="horizontal">
          <div className="Card-Button">
            <Button buttonType="icon">
              <LikeIcon />
            </Button>
          </div>
          <div className="Card-info">
            <span className={inter.className}>
              <b>Vende con tu e-commerce</b>
              <br />
              Ahórrate pasos con nuestra solución digital.
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
}
