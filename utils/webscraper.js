import axios from 'axios';
import * as cheerio from 'cheerio';

export const scrapeWebsite = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Aquí puedes agregar tu lógica de scraping usando jQuery-like syntax con Cheerio
    // Por ejemplo, obtener un título:
    const selectorTitle = "title"
    const selector = '#__next > div > header > div.sc-5ff8c244-0.hBzpbt.liveBlogStrip > div > ul > li:nth-child(1) > h2 > a'
    
    const data = {
      title : $(selectorTitle).text(),
      Subtitle : $(selector).text(),
    
    }
    return data;
    
  } catch (error) {
    console.error('Error al hacer scraping:', error);
    throw error;
  }
};
