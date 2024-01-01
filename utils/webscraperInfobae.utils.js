import axios from 'axios';
import * as cheerio from 'cheerio';

export const scrapeWebInfobae = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const dataArray = []
    $('.story-card-ctn').each((index, element) => {
      const title = $(element).find('.story-card-hl').text().trim();
      
      // Extrae la URL de la imagen
      let imageUrl = $(element).find('.story-card-img-ctn.story-card-img-ctn-169 img').attr('src');
      let NotaUrl = $(element).find('.headline-link').attr('href');
      
      // Si la URL es relativa, conviértela en absoluta
      if (imageUrl && imageUrl.startsWith('/')) {
          imageUrl = `https://www.infobae.com${imageUrl}`;
      }
  
      if (NotaUrl && NotaUrl.startsWith('/')) {
        NotaUrl = `https://www.infobae.com${NotaUrl}`;
    }

  
      dataArray.push({
          title: title,
          imageUrl: imageUrl,
          url: NotaUrl
      });
  });
  

  return dataArray
    
  } catch (error) {
    console.error('Error al hacer scraping:', error);
    throw error;
  }
};
