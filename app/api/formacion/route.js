export async function GET() {
  const data = {
    educacion: [
      {
        year: "2021 – 2024",
        titulo: "Ciclo Formativo Grado Superior",
        centro: "CIFP Villa de Agüimes",
        descripcion: "Desarrollo de Aplicaciones Web."
      }
    ],

    certificados: [
      {
        href: "https://skillshop.exceedlms.com/student/award/8yZtPqekLf16ZEva4MdnbX8g",
        image: "/googleactivate-logo.svg",
        alt: "Google Activate Logo",
        title: "Introducción al Desarrollo Web: HTML y CSS I"
      },
      {
        href: "https://skillshop.exceedlms.com/student/award/8yZtPqekLf16ZEva4MdnbX8g",
        image: "/googleactivate-logo.svg",
        alt: "Google Activate Logo",
        title: "Introducción al Desarrollo Web: HTML y CSS II"
      },
      {
        href: "https://www.sololearn.com/certificates/CC-4AWDFSNB",
        image: "/sololearn_logo.svg",
        alt: "Sololearn Logo",
        title: "JavaScript Intermedio"
      },
      {
        href: "https://www.sololearn.com/certificates/CC-9J7RKILW",
        image: "/sololearn_logo.svg",
        alt: "Sololearn Logo",
        title: "Desarrollo de videojuegos con JS"
      },
      {
        href: "https://www.simplilearn.com",
        image: "/simplilearn-logo.png",
        alt: "Simplilearn Logo",
        title: "Curso Shopify"
      },
      {
        href: "https://bigschool.ai",
        image: "/bigschool-logo.svg",
        alt: "BIG School Logo",
        title: "Curso de Iniciación a los flujos de trabajo con Inteligencia Artificial"
      },
      {
        href: "https://www.sololearn.com",
        image: "/sololearn_logo.svg",
        alt: "Sololearn Logo",
        title: "SEO con IA"
      },
      {
        href: "https://www.sololearn.com",
        image: "/sololearn_logo.svg",
        alt: "Sololearn Logo",
        title: "Ingeniería de prompts"
      }
    ],

    idiomas: [
      { idioma: "Español", nivel: "Nativo / Bilingüe" },
      { idioma: "Hindi", nivel: "Nativo / Bilingüe" },
      { idioma: "Inglés", nivel: "Profesional" }
    ]
  };

  return Response.json(data);
}
