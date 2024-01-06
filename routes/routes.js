import express from 'express';
import { ScrapeWeb } from '../controllers/index.js';
import { scrapeWebDolar, scrapeWebInfobae,scrapeWebDolarV2 } from '../utils/index.js';


const urlDolar = 'https://www.infobae.com/economia/divisas/dolar-hoy/';  // Ejemplo de URL para scraping
const urlNews = 'https://www.infobae.com';  // Ejemplo de URL para scraping

// const urlDolar = process.env.DOLAR_URL
// const urlNews = process.env.NEWS_URL

const router = express.Router();

router.get('/dolar/v1',ScrapeWeb(scrapeWebDolar, urlDolar));
router.get('/news',ScrapeWeb(scrapeWebInfobae, urlNews))
router.get('/dolar/v2',ScrapeWeb(scrapeWebDolarV2,urlDolar))
// router.get('/items', getItems );
  
// router.post('/items', PostItem);

// router.put('/items/:id',PutItem);

// router.delete('/items/:id',DeleteItem);

export default router