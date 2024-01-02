
export const ScrapeWeb = (scrapeFunction, url) => async (req, res) => {
        try {
          const data = await scrapeFunction(url);  // Llama a la función de scraping
          res.json({ data });  // Devuelve el título obtenido como respuesta
        } catch (error) {
          res.status(500).json({ error: 'Error al hacer scraping dolar' });
        }
      }
