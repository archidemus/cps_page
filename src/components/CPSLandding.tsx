import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";
import CPSLogo from "@/assets/CPS Logo.png";

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "nosotros", "servicios", "contacto"];
      const scrollPosition = window.scrollY + 100; // Adding offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-20 flex items-center sticky top-0 bg-white z-10 shadow-sm">
        <Link
          className="flex items-center justify-center"
          onClick={() => scrollToSection("inicio")}
        >
          <img src={CPSLogo.src} alt="CPS Logo" className="h-12 w-auto" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              activeSection === "inicio" ? "text-red-600" : ""
            }`}
            onClick={() => scrollToSection("inicio")}
          >
            Inicio
          </Link>
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              activeSection === "nosotros" ? "text-red-600" : ""
            }`}
            onClick={() => scrollToSection("nosotros")}
          >
            Nosotros
          </Link>
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              activeSection === "servicios" ? "text-red-600" : ""
            }`}
            onClick={() => scrollToSection("servicios")}
          >
            Servicios
          </Link>
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${
              activeSection === "contacto" ? "text-red-600" : ""
            }`}
            onClick={() => scrollToSection("contacto")}
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="inicio"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-red-50 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  CPS - Sistemas y Componentes Eléctricos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Soluciones eléctricas integrales para la industria desde 1997
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-red-600 text-white hover:bg-red-700"
                  onClick={() => scrollToSection("servicios")}
                >
                  Nuestros Servicios
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contacto")}
                >
                  Contáctenos
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="nosotros"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Sobre Nosotros
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-4">Nuestra Historia</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fundada en 1997, CPS LTDA comenzó suministrando sistemas
                  eléctricos para maquinaria. Con el tiempo, hemos expandido
                  nuestros servicios para ofrecer soluciones eléctricas llave en
                  mano, incluyendo ingeniería, montaje, mantenimiento y
                  distribución de componentes eléctricos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Nos comprometemos a crecer buscando soluciones adecuadas y
                  seguras para operadores y usuarios. Nos guiamos por el
                  profesionalismo, la responsabilidad y un espíritu de
                  innovación constante para satisfacer las necesidades de
                  nuestros clientes, colaboradores y socios.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="servicios"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Productos y Servicios
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Sistemas eléctricos para molinos y ventiladores",
                "Sistemas eléctricos para hornos y refrigeración",
                "Montaje de subestaciones y bancos de condensadores",
                "Diseño de tableros especiales CCM y consolas",
                "Sistemas de control para plantas de áridos y estaciones de bombeo",
                "Distribución de componentes eléctricos especializados",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 bg-white p-4 rounded-lg shadow-sm"
                >
                  <ArrowRight className="h-5 w-5 text-red-600 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contacto"
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Contáctenos
            </h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Información de Contacto</h3>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span>info@cps-ltda.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span>+56 2 2345 6789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  <span>Lunes a Viernes: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Nombre" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Mensaje" />
                <div className="flex items-center space-x-2">
                  <Checkbox id="captcha" />
                  <label htmlFor="captcha">No soy un robot</label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 CPS LTDA. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            onClick={() => {}}
          >
            Términos de Servicio
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            onClick={() => {}}
          >
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}

type LinkProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

function Link({ onClick, children, className }: LinkProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
