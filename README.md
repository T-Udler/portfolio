# Portfolio de Tomás Udler

Sitio de portfolio personal, construido con [Astro](https://astro.build). Se despliega gratis en Vercel y se actualiza automáticamente con cada `git push`.

## Cómo agregar o cambiar contenido (sin escribir código)

No hace falta tocar código a mano. Basta con abrir una sesión de Claude Code en esta carpeta y pedir, por ejemplo:

- "Agregá un proyecto nuevo: [título], con esta descripción, tags y link de video."
- "Cambiá mi email de contacto a X."
- "Sacá el proyecto de Harry Potter del portfolio."

Claude edita los archivos correspondientes y hace el commit + push. Vercel vuelve a publicar el sitio solo, en menos de un minuto.

### Dónde vive cada cosa (para referencia)

- `src/data/profile.ts` — nombre, rol, bio, email, teléfono, redes.
- `src/content/projects/*.md` — un archivo markdown por proyecto (título, descripción, tags, herramientas, link de video).
- `src/pages/index.astro`, `src/components/`, `src/layouts/` — diseño y estructura visual del sitio (pendiente de un rediseño más sofisticado a futuro).

## Comandos

| Comando           | Acción                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Instala las dependencias                    |
| `npm run dev`       | Corre el sitio localmente en `localhost:4321` |
| `npm run build`     | Genera la build de producción en `./dist/`  |
| `npm run preview`   | Previsualiza la build antes de publicar     |
