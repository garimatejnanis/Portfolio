//API de Sobre Mi

export async function GET() {

  const data = {
    sobreMi: {
      titulo: "Sobre mí",
      parrafo1:
        "Soy desarrolladora web y disfruto transformar ideas en soluciones digitales claras, eficientes y bien estructuradas. Trabajo de forma organizada, cuidando cada detalle del diseño, la arquitectura y la funcionalidad para que cada proyecto sea fácil de mantener, escalable y agradable de usar. Me interesa especialmente la experiencia de usuario, la calidad del código y la optimización del rendimiento como parte esencial del desarrollo.",
      parrafo2:
        "He participado en proyectos reales para empresas y clientes, colaborando en todas las fases: planificación, desarrollo, mejora y evolución técnica. He creado webs corporativas, tiendas online y paneles de administración orientados a la gestión de contenido, productos y usuarios, adaptados a las necesidades de cada negocio. También utilizo herramientas de IA para detectar mejoras, optimizar procesos y asegurar que cada solución funcione de forma sólida y profesional.",
    },
    
    skills: {
      frontEnd: [
        { name: "HTML5", icon: "/html-logo.svg", alt: "HTML5" },
        { name: "CSS3", icon: "/css-logo.svg", alt: "CSS3" },
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