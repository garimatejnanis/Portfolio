export async function GET(request) {
  const secret = request.headers.get("x-api-secret");

  if (secret !== process.env.API_SECRET) {
    return new Response("No autorizado", { status: 401 });
  }

  const data = {
    titulo: "Garima Tejnani - Desarrolladora Web",
    descripcion:
      "Creo aplicaciones modernas, rápidas y escalables con enfoque en experiencia de usuario."
  };

  return Response.json(data);
}