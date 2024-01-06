import puppeteer from 'puppeteer';

export const scrapeWebDolarV2 = async (url) => {
  try {
    // Iniciar el navegador de Puppeteer
   // puppeteer.connect({ browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.API_TOKEN}` })
    const browser = await puppeteer.launch({args: ['--no-sandbox'] });
    const page = await browser.newPage();

    // Cargar la página
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Utilizamos el selector específico para obtener cada elemento con la clase ".foreign-item-ct"
    const dataArray = await page.$$eval('.foreign-item-ctn', elements => {
      return elements.map(element => {
        const title = element.querySelector('span.box-info-title.fc-link').innerText.trim();
        const compra = element.querySelector('.box-info-content-values .fc-sub .fc-val').innerText.trim();
        const venta = element.querySelector('.box-info-content-values .fc-sub .fc-val:last-child').innerText.trim();
        const value = element.querySelector('.box-info-content-percent .fc-per').innerText.trim();

        // Obtenemos el estilo de la clase ".box-info-percent"
        const styleElement = element.querySelector('.box-info-percent');
        const style = window.getComputedStyle(styleElement);
        const backgroundColor = style.backgroundColor;

        return {
          date: new Date().toLocaleDateString(),
          title,
          values: {
            compra,
            venta,
        },
        variation:{
            value,
            backgroundColor
          }
        };
      });
    });

    // Cerrar el navegador
    await browser.close();

    return dataArray;

  } catch (error) {
    console.error('Error al hacer scraping V2:', error);
    throw error;
  }
};







