import express from 'express';
import { ScrapeWeb } from '../controllers/Scrape.controller.js';
import { scrapeWebDolar } from "../utils/webscraperDolar.utils.js";
import { scrapeWebInfobae } from '../utils/webscraperInfobae.utils.js';


const urlDolar = 'https://www.infobae.com/economia/divisas/dolar-hoy/';  // Ejemplo de URL para scraping
const urlInfobae = 'https://www.infobae.com';  // Ejemplo de URL para scraping

const router = express.Router();

router.get('/dolar',ScrapeWeb(scrapeWebDolar, urlDolar));
router.get('/infobae',ScrapeWeb(scrapeWebInfobae, urlInfobae))

// router.get('/items', getItems );
  
// router.post('/items', PostItem);

// router.put('/items/:id',PutItem);

// router.delete('/items/:id',DeleteItem);

export default router