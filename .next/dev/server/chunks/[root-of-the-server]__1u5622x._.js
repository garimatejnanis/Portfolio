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
"[project]/app/api/proyectos/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    const data = [
        {
            titulo: "Proyecto Final (CFGS)",
            descripcion: "Desarrollo completo de una aplicación web utilizando PHP, MySQL y Bootstrap, implementando funcionalidades CRUD y gestión de usuarios.",
            tecnologias: "HTML · CSS · JavaScript · PHP · MySQL",
            tipo: "swiper",
            media: "ProjectsSwiper",
            enlace: "https://github.com/garimatejnanis/Proyecto-PRW-Garima",
            enlaceTexto: "Ver código"
        },
        {
            titulo: "Kasas Home – Inmobiliaria",
            descripcion: "Sitio web corporativo desarrollado en WordPress, optimizado para gestión de propiedades y navegación intuitiva.",
            tecnologias: "WordPress · PHP · HTML · CSS · JavaScript",
            tipo: "swiper3",
            media: "ProjectsSwiper3",
            enlace: "https://kasashome.com/",
            enlaceTexto: "Ver proyecto"
        },
        {
            titulo: "CRUD – Agenda de Contactos",
            descripcion: "Aplicación CRUD para gestionar contactos, con almacenamiento en MySQL y funcionalidades de búsqueda y edición.",
            tecnologias: "HTML · CSS · JavaScript · PHP · MySQL",
            tipo: "swiper2",
            media: "ProjectsSwiper2",
            enlace: "https://github.com/garimatejnanis/CRUD---AGENDA",
            enlaceTexto: "Ver código"
        }
    ];
    return Response.json(data);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1u5622x._.js.map