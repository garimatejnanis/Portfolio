export async function GET(request) {
  const secret = request.headers.get("x-api-secret");

  if (secret !== process.env.API_SECRET) {
    return new Response("No autorizado", { status: 401 });
  }
  
  const data = [
    {
      titulo: "Proyecto Final (CFGS)",
      descripcion:
        "Desarrollo completo de una aplicación web utilizando PHP, MySQL y Bootstrap, implementando funcionalidades CRUD y gestión de usuarios.",
      tecnologias: "HTML · CSS · JavaScript · PHP · MySQL",
      tipo: "swiper",
      media: "ProjectsSwiper",
      enlace: "https://github.com/garimatejnanis/Proyecto-PRW-Garima",
      enlaceTexto: "Ver código"
    },

    {
      titulo: "Kasas Home – Inmobiliaria",
      descripcion:
        "Sitio web corporativo desarrollado en WordPress, optimizado para gestión de propiedades y navegación intuitiva.",
      tecnologias: "WordPress · PHP · HTML · CSS · JavaScript",
      tipo: "swiper3",
      media: "ProjectsSwiper3",
      enlace: "https://kasashome.com/",
      enlaceTexto: "Ver proyecto"
    },

    {
      titulo: "CRUD – Agenda de Contactos",
      descripcion:
        "Aplicación CRUD para gestionar contactos, con almacenamiento en MySQL y funcionalidades de búsqueda y edición.",
      tecnologias: "HTML · CSS · JavaScript · PHP · MySQL",
      tipo: "swiper2",
      media: "ProjectsSwiper2",
      enlace: "https://github.com/garimatejnanis/CRUD---AGENDA",
      enlaceTexto: "Ver código"
    }
  ];

  return Response.json(data);
}
