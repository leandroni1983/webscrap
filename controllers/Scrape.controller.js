import { scrapeWebsite } from "../utils/webscraper.js";

export const ScrapeWeb = async (req, res) => {
        const url = 'https://www.clarin.com/';  // Ejemplo de URL para scraping
        try {
          const data = await scrapeWebsite(url);  // Llama a la función de scraping
          res.json({ data });  // Devuelve el título obtenido como respuesta
        } catch (error) {
          res.status(500).json({ error: 'Error al hacer scraping' });
        }
      }
