export async function GET(request) {
  const secret = request.headers.get("x-api-secret");

  if (secret !== process.env.API_SECRET) {
    return new Response("No autorizado", { status: 401 });
  }

  const data = {
    sobreMi: {
      titulo: "Sobre mí",
      parrafo1:
        "Soy desarrolladora web enfocada en crear aplicaciones modernas, rápidas y centradas en la experiencia del usuario. Me gusta trabajar de forma organizada, cuidando cada detalle del diseño y la funcionalidad para asegurar que cada proyecto sea claro, escalable y fácil de mantener.",
      parrafo2:
        "Combino desarrollo Front‑End y Back‑End para construir soluciones completas: webs corporativas, tiendas online, paneles de administración y sistemas personalizados que ayudan a empresas y profesionales a mejorar su presencia digital y optimizar sus procesos."
    },

    skills: {
      frontEnd: [
        { name: "HTML5", icon: "/html-logo.svg", alt: "HTML5" },
        { name: "CSS3", icon: "/css-logo.svg" , alt: "CSS3"},
        { name: "JavaScript", icon: "/javascript-logo.svg", alt: "JavaScript" },
        { name: "Bootstrap", icon: "/bootstrap-logo.svg", alt: "Bootstrap" },
        { name: "React", icon: "/react-logo.svg", alt: "React" }
      ],

      backEnd: [
        { name: "PHP", icon: "/php-logo.svg", alt: "PHP" },
        { name: "Laravel", icon: "/laravel-logo.svg", alt: "Laravel" },
        { name: "MySQL", icon: "/mysql-logo.svg", alt: "MySQL" },
        { name: "PostgreSQL", icon: "/postgresql-logo.svg", alt: "PostgreSQL" },
        { name: "MariaDB", icon: "/mariadb-logo.svg", alt: "MariaDB" }
      ],

      cms: [
        { name: "WordPress", icon: "/wordpress-logo.svg", alt: "WordPress" },
        { name: "Shopify", icon: "/shopify-logo.svg", alt: "Shopify" }
      ],

      tools: [
        { name: "GIT", icon: "/github-logo.svg", alt: "GIT" },
        { name: "Google Analytics 4", icon: "/googleanalytics-logo.svg", alt: "Google Analytics 4" },
        { name: "Google Search Console", icon: "/googlesearchconsole-logo.svg", alt: "Google Search Console" },
        { name: "PageSpeed Insights", icon: "/pagespeedinsights-logo.svg", alt: "PageSpeed Insights" },
        { name: "Postman", icon: "/postman-logo.svg", alt: "Postman" },
        { name: "Workbench", icon: "/workbench-logo.webp", alt: "Workbench" },
        { name: "Microsoft Copilot", icon: "/copilot-logo.webp", alt: "Microsoft Copilot" },
        { name: "Claude Code", icon: "/claude-logo.webp", alt: "Claude Code" },
        { name: "Visual Studio Code", icon: "/vs-logo.webp", alt: "Visual Studio Code" }
      ]
    }
  };

  return Response.json(data);
}
