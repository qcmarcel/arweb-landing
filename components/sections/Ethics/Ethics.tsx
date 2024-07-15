import "./Ethics.css";
import { Inter } from "next/font/google";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { ExcellenceIcon, ProductivityIcon, ServicesIcon, TrustIcon } from "@/components/icons";


const inter = Inter({ subsets: ["latin"] });

export function EthicsSection() {
  return (
    <section className="Ethics" data-orden="der-izq">
      <div className="Ethics-content">
        <h2>Ética Corporativa</h2>
        <p className={inter.className}>
          Nuestros valores son el corazón de todo lo que hacemos
        </p>
        <div className="Ethics-content-card">
          <Card cardType="vertical">
            <div className="Card-Button">
              <Button buttonType="icon">
                <TrustIcon />
              </Button>
            </div>
            <div className="Card-info">
              <span className={inter.className}>
                <b>Confianza</b>
                <br />
                <br />
                Nos dedicamos a ser fiables y consistentes en todas nuestras
                acciones, asegurando que nuestros clientes y colaboradores
                puedan contar con nosotros en todo momento.
              </span>
            </div>
          </Card>
          <Card cardType="vertical">
            <div className="Card-Button">
              <Button buttonType="icon">
                <ExcellenceIcon />
              </Button>
            </div>
            <div className="Card-info">
              <span className={inter.className}>
                <b>Excelencia</b>
                <br />
                <br />
                Nos comprometemos a superar constantemente nuestros propios
                estándares y a ofrecer productos y servicios que representen lo
                mejor de nuestra capacidad y dedicación.
              </span>
            </div>
          </Card>
          <Card cardType="vertical">
            <div className="Card-Button">
              <Button buttonType="icon">
                <ProductivityIcon />
              </Button>
            </div>
            <div className="Card-info">
              <span className={inter.className}>
                <b>Productividad</b>
                <br />
                <br />
                Nos enfocamos en trabajar de manera inteligente, implementando
                procesos ágiles y logrando más con menos, en beneficio tanto de
                nuestros clientes como a nuestros colaboradores..
              </span>
            </div>
          </Card>
          <Card cardType="vertical">
            <div className="Card-Button">
              <Button buttonType="icon">
                <ServicesIcon />
              </Button>
            </div>
            <div className="Card-info">
              <span className={inter.className}>
                <b>Servicio</b>
                <br />
                <br />
                Nos esforzamos por comprender sus necesidades y ofrecer
                soluciones que vayan más allá de sus expectativas, creando así
                experiencias inolvidables y significativas.
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
