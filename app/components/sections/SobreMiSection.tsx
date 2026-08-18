// Importamos el componente Image de Next.js para optimizar la carga de imágenes

import Image from "next/image";

// Componente para renderizar un grupo de skills (Front-End, Back-End, CMS, Herramientas)

function SkillGroup({ title, titleClassName, gridClassName, skills, cardClassName }) {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
      <div className={cardClassName}>
        <h4 className={titleClassName}>{title}</h4>
        <div className={gridClassName}>

          {skills.map((skill) => (

            <span key={skill.name}>
              <Image src={skill.icon} alt={skill.name} width={18} height={18}
              style={{ marginRight: "6px", width: "18px", height: "18px", objectFit: "contain" }} loading="lazy"/>
              {skill.name}
            </span>

          ))}
        </div>
      </div>
    </div>
  );
}

//Componente principal de la sección "Sobre Mi" que se renderiza en el servidor y obtiene los datos de la API

export default async function SobreMiSection() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/sobremi`, {
    cache: "no-store",
  });

  const data = await res.json();
  const { sobreMi, skills } = data;

  return (
    <section id="sobre-mi" className="home-section pt-2 pb-5">
      <div className="row justify-content-center px-3">
        <div className="col-auto text-center">
          <h2>{sobreMi.titulo}</h2>
          <div className="decoracionLinea animada"></div>

          <p>{sobreMi.parrafo1}</p>
          <br />
          <p>{sobreMi.parrafo2}</p>

          <h3 className="tituloSkills mt-5">Skills Técnicos</h3>
          <div className="decoracionLinea animada"></div>
        </div>
      </div>

      <div className="row justify-content-center g-3 px-3 pb-4">

        <SkillGroup title="Front-End" titleClassName="tituloFE" gridClassName="textoFE"skills={skills.frontEnd} cardClassName="cajaCuerpoFE"/>

        <SkillGroup title="Back-End" titleClassName="tituloBE" gridClassName="textoBE" skills={skills.backEnd} cardClassName="cajaCuerpoBE"/>

        <SkillGroup title="CMS" titleClassName="tituloTP" gridClassName="textoTP" skills={skills.cms} cardClassName="cajaCuerpoTP"/>

        <SkillGroup title="Herramientas" titleClassName="tituloTH" gridClassName="textoTH" skills={skills.tools} cardClassName="cajaCuerpoTH"/>

      </div>
    </section>
  );
}