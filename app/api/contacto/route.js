//API de Contacto

export async function GET() {
  const data = [
    {
      nombre: "LinkedIn",
      href: "https://es.linkedin.com/in/garima-ts-6b8252248",
      image: "/linkedin-logo.svg",
      alt: "LinkedIn"
    },
    {
      nombre: "Email",
      href: "mailto:garimatejnani@gmail.com",
      image: "/gmail-logo.svg",
      alt: "Email"
    },
    {
      nombre: "GitHub",
      href: "https://github.com/garimatejnanis/",
      image: "/github-logo.svg",
      alt: "GitHub"
    }
  ];

  return Response.json(data);
}