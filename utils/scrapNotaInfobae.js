import axios from 'axios';
import * as cheerio from 'cheerio';

export const scrapeNotaInfobae = async (notaUrl) => {

  try {
    const response = await axios.get(notaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept-Language': 'es-ES,es;q=0.9',
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // Extraer subtítulo si existe
    const subheadline = $('.article-subheadline').text().trim();
    

    // Extraer párrafos dentro del article
    // const paragraphs = $('article.article .paragraph')
    //   .map((i, el) => $(el).text().trim())
    //   .get()
    //   .filter(p => p.length > 0);

    const fullText = [
      subheadline, // Primero el subtítulo
     // ...paragraphs // Luego los párrafos del artículo
    ]
      .filter(Boolean) // Filtra null o strings vacíos
      .join('\n\n');

    return fullText;

  } catch (error) {
    console.error(`❌ Error scraping Infobae article ${notaUrl}:`, error.message);
    return '';
  }
};
