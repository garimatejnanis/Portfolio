# Portfolio Web – Garima Tejnani

Portafolio profesional desarrollado con **Next.js, React y TypeScript**, con foco en rendimiento, accesibilidad y SEO.

🔗 **Demo en vivo:** [garimatejnanis.vercel.app](https://garimatejnanis.vercel.app)

## 📊 Resultados de Lighthouse / PageSpeed Inshigts

- **Performance:** 100/100
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

## 🚀 Tecnologías

- [Next.js](https://nextjs.org/) (App Router)
- React + TypeScript
- Bootstrap
- Swiper (carruseles de proyectos)
- Traductor Google
- Google Analytics 4 / Google Search Console

## ✨ Características

- Diseño responsive, optimizado para móvil y desktop
- Secciones renderizadas como Server Components para minimizar JavaScript en el cliente y evitar layout shifts (CLS)
- API interna (Next.js route handlers) para servir el contenido de experiencia, proyectos y skills
- Selector de idioma con Google Translate
- SEO técnico: metadata dinámica, datos estructurados (JSON-LD), sitemap

## 🛠️ Instalación local

\`\`\`bash
git clone https://github.com/garimatejnanis/Portfolio
cd nombre-del-repo
npm install
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del proyecto

\`\`\`
app/
  api/            # Endpoints internos (experiencia, proyectos, contacto, sobremi...), CSS global...
  (secciones)/
components/
  sections/       # Secciones de la página (Inicio, Sobre mí, Experiencia, Proyectos...)
public/           # Imágenes, iconos, CV..
src/              # Cabecera, footer, ClientScript...
    componentes
\`\`\`

## 📬 Contacto

- LinkedIn: [Garima Tejnani](https://es.linkedin.com/in/garima-ts-6b8252248)
- Email: garimatejnani@gmail.com