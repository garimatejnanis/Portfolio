module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/formacion/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
async function GET(request) {
    const secret = request.headers.get("x-api-secret");
    if (secret !== process.env.API_SECRET) {
        return new Response("No autorizado", {
            status: 401
        });
    }
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
            {
                idioma: "Español",
                nivel: "Nativo / Bilingüe"
            },
            {
                idioma: "Hindi",
                nivel: "Nativo / Bilingüe"
            },
            {
                idioma: "Inglés",
                nivel: "Profesional"
            }
        ]
    };
    return Response.json(data);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1flbfbt._.js.map