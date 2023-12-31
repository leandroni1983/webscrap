import axios from 'axios';
import * as cheerio from 'cheerio';


export const scrapeWebDolar = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const dataArray = []; // Aquí almacenaremos los objetos con texto y href
    
    // Utilizamos el selector específico para obtener cada elemento con la clase "exchange-dolar-item"
    $('.exchange-dolar-item').each((index, element) => {
        const titleElement = $(element).find('.exchange-dolar-title'); // Encuentra el elemento <a> dentro de .exchange-dolar-item
        const titleText = titleElement.find('p').text().trim(); // Obtén el texto dentro del <p> dentro del elemento <a>
        const amount = $(element).find('.exchange-dolar-amount').text().trim(); // Obtén el texto del elemento con la clase "exchange-dolar-amount"
        const percentaje = $(element).find('.exchange-dolar-diff-ctn .exchange-dolar-percentage').text().trim();


        // Agregamos un objeto al array con el texto y el href
        dataArray.push({
            date: new Date().toLocaleDateString(),
            name: titleText,
            value: amount,
            percentaje
          });
             
        });
        return dataArray;
    
  } catch (error) {
    console.error('Error al hacer scraping:', error);
    throw error;
  }
};
