//API de Experiencia

export async function GET() {
  const data = [
    {
      year: "Septiembre 2025 – Actualidad",
      empresa: "Mos Fashion",
      puestoPrincipal: "Desarrolladora Web Junior",
      descripcionPrincipal:
        "Desarrollo y mantenimiento de aplicaciones y funcionalidades web dentro del departamento digital, colaborando en la mejora continua de la plataforma, la optimización del rendimiento y la experiencia de usuario.",
      tareasPrincipal: [
        "Desarrollo y mantenimiento de funcionalidades web con Laravel, PHP, HTML, CSS y JavaScript.",
        "Desarrollo de un proyecto interno con Laravel, participando en el análisis, implementación y evolución de nuevas funcionalidades.",
        "Gestión y mantenimiento de la tienda online en Shopify: mejoras funcionales, actualización de contenidos y optimización de la experiencia de usuario.",
        "Maquetación e integración de componentes visuales adaptados a las necesidades del negocio.",
        "Optimización de SEO técnico para mejorar el rendimiento, la indexación y el posicionamiento web.",
        "Colaboración con distintos departamentos en la mejora continua de las soluciones digitales.",
        "Uso de herramientas de IA para el desarrollo y revisión de código, detectando errores y aplicando mejoras."
      ],

      puestoSecundario: "Técnica de Proyectos",
      descripcionSecundaria:
        "Actividad en el departamento de Administración de Obras, coordinando proveedores, servicios de mantenimiento y recursos para garantizar el correcto funcionamiento de una red de tiendas.",
      tareasSecundaria: [
        "Gestión y seguimiento de facturas, albaranes y presupuestos, coordinando su correcta tramitación con los departamentos implicados.",
        "Coordinación y comunicación con proveedores, gestionando incidencias, pedidos y necesidades operativas.",
        "Búsqueda y selección de proveedores para servicios de mantenimiento, reparaciones y otras necesidades de los establecimientos.",
        "Planificación y seguimiento de actuaciones de mantenimiento, asegurando su correcta ejecución en plazo.",
        "Supervisión del estado de las tiendas mediante visitas periódicas y resolución de incidencias.",
        "Gestión de material y suministros necesarios para el funcionamiento diario de los establecimientos.",
        "Coordinación con distintos departamentos internos para garantizar una respuesta ágil a las necesidades operativas.",
        "Elaboración de informes y seguimiento de datos mediante Microsoft Excel."
      ]
    },

    {
      year: "Noviembre 2024 – Actualidad",
      empresa: "Web Developer – Freelance",
      puestoPrincipal: "Desarrolladora Web Freelance",
      descripcionPrincipal:
        "Desarrollo de soluciones web para clientes, participando en el diseño, desarrollo, mantenimiento y optimización de sitios web adaptados a las necesidades de cada proyecto.",
      tareasPrincipal: [
        "Desarrollo y personalización de un sitio web para una agencia inmobiliaria con WordPress, HTML, CSS, JavaScript y PHP.",
        "Diseño, mantenimiento y actualización de la página web de un negocio local, implementando mejoras funcionales y visuales.",
        "Gestión y optimización del contenido web para mejorar el rendimiento, la experiencia de usuario y el posicionamiento SEO.",
        "Administración y actualización periódica del sitio web, garantizando su correcto funcionamiento.",
        "Gestión de redes sociales (Instagram y Facebook), coordinando la publicación de contenido y la presencia digital del negocio.",
        "Uso de herramientas de Inteligencia Artificial para el desarrollo y revisión de código, detectando errores y aplicando mejoras."
      ]
    },

    {
      year: "Enero 2024 – Junio 2024",
      empresa: "21ninjas",
      puestoPrincipal: "Prácticas de Empresa",
      descripcionPrincipal:
        "Durante mis prácticas participé en el desarrollo y mantenimiento de sitios web, colaborando principalmente en el proyecto JuanitaKO Swimwear mediante WordPress y tecnologías web.",
      tareasPrincipal: [
        "Desarrollo y personalización de sitios web con WordPress, HTML, CSS, JavaScript y PHP.",
        "Implementación y mantenimiento de funcionalidades mediante plugins como WooCommerce, Elementor y Yoast SEO.",
        "Instalación, configuración y administración de entornos WordPress, incluyendo hosting, usuarios y copias de seguridad.",
        "Optimización del rendimiento, seguridad y SEO técnico para mejorar la experiencia de usuario y el posicionamiento web.",
        "Colaboración con el equipo en el mantenimiento y mejora continua de proyectos web."
      ]
    }
  ];

  return Response.json(data);
}