import puppeteer from 'puppeteer';

export const scrapeWebDolarV2 = async (url) => {
  try {
    // Iniciar el navegador de Puppeteer
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: 'new', 
      args: ['--no-sandbox'] 
    });
    const page = await browser.newPage();
    // Cargar la página
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 600000 });

    // Utilizamos el selector específico para obtener cada elemento con la clase ".foreign-item-ct"
    const dataArray = await page.$$eval('.foreign-item-ctn', elements => {
      return elements.map(element => {
        const title = element.querySelector('span.box-info-title.fc-link').innerText.trim();
        // Obtenemos elvalor de compra y venta 
        const compraElement = element.querySelector('.box-info-content-values .fc-sub:nth-child(1) .fc-val')
        const compra = compraElement ? compraElement.innerText.trim() : 'N/A';
        const ventaElement = element.querySelector('.box-info-content-values .fc-sub:nth-child(2) .fc-val')
        const venta = ventaElement ? ventaElement.innerText.trim() : 'N/A';
       
        // Obtenemos el porcentaje de variacion de las ultimas 24hs
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







