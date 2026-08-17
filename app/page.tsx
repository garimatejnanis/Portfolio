import InicioSection from './components/sections/InicioSection';
import SobreMiSection from './components/sections/SobreMiSection';
import EducacionSection from './components/sections/EducacionSection';
import ContactSection from './components/sections/ContactSection';
import ProyectosSection from './components/sections/ProyectosSection';
import ExperienciaSection from './components/sections/ExperienciaSection';

// Página principal: secciones unidas por anclas (single-page)
export default function Home() {
  return (
    <main className="container-fluid cuerpo">
      <InicioSection />
      <SobreMiSection />
      <ExperienciaSection />
      <ProyectosSection />
      <EducacionSection />
      <ContactSection />
    </main>
  );
}

