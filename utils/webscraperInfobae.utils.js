import axios from 'axios';
import * as cheerio from 'cheerio';
import { scrapeNotaInfobae } from './scrapNotaInfobae.js';

export const scrapeWebInfobae = async (url, options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept-Language': 'es-ES,es;q=0.9',
  },
}) => {
  try {
    const response = await axios.get(url, options);
    const html = response.data;
    const $ = cheerio.load(html);

    const dataArray = [];
    const elements = $('.story-card-ctn');

    for (const element of elements) {
      const title = $(element).find('.story-card-hl').text().trim();

      let imageUrl = $(element).find('.story-card-img-ctn.story-card-img-ctn-169 img').attr('src');
      let NotaUrl = $(element).attr('href');

      if (imageUrl && imageUrl.startsWith('/')) {
        imageUrl = `https://www.infobae.com${imageUrl}`;
      }

      if (NotaUrl && NotaUrl.startsWith('/')) {
        NotaUrl = `https://www.infobae.com${NotaUrl}`;
      }

      // Esperar el scraping de la nota individual
      const fullText = await scrapeNotaInfobae(NotaUrl);
      console.log(fullText);

      dataArray.push({ title, imageUrl, url: NotaUrl, fullText });
    }

    return dataArray;

  } catch (error) {
    console.error('❌ Error al hacer scraping:', error.message);
    throw error;
  }
};
