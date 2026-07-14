# MAI Softwares — Web corporativa

Web corporativa y portfolio editorial de **MAI Softwares**: videojuegos, SaaS y experiencias web.

- Stack: **Astro + TypeScript + CSS** (estático, sin backend)
- Idiomas: **ES** (por defecto, `/`) y **EN** (`/en/`)
- En producción: **https://mai-software.github.io** — GitHub Pages, deploy automático con cada push a `main` (GitHub Actions)

## Comandos

| Comando           | Acción                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`|
| `npm run build`   | Build de producción en `./dist/`          |
| `npm run preview` | Previsualiza el build                     |

## Añadir un nuevo proyecto

1. Crea `src/content/projects/es/mi-proyecto.md` y `src/content/projects/en/mi-proyecto.md` (mismo `slug` en ambos).
2. Añade `public/projects/mi-proyecto/cover.webp` (16:10) y capturas opcionales.
3. Completa el frontmatter (categoría: `game` | `saas` | `web`; variante: `featured` | `wide` | `split-left` | `split-right` | `compact` | `editorial`).
4. `npm run build` y publica.

**No hace falta tocar ningún componente.**

## Pendiente de contenido real

- Email de contacto y redes en `src/data/company.ts`.
- Dominio propio (opcional): configurar en Pages y actualizar `astro.config.mjs` y `public/robots.txt`.
- Datos legales cuando exista constitución (`/legal`).
- Sustituir los 3 proyectos de ejemplo por proyectos reales.
