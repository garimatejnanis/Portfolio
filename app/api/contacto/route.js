export async function GET(request) {
  
  const secret = request.headers.get("x-api-secret");

  if (secret !== process.env.API_SECRET) {
    return new Response("No autorizado", { status: 401 });
  }

  const data = [
    {
      nombre: "LinkedIn",
      href: "https://es.linkedin.com/in/garima-ts-6b8252248",
      image: "/linkedin-logo.svg",
      alt: "LinkedIn"
    },
    {
      nombre: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=garimatejnani@gmail.com",
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
