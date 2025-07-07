import express from 'express';
import { ScrapeWeb } from '../controllers/index.js';
import { scrapeWebDolar, scrapeWebInfobae } from '../utils/index.js';


const urlDolar = 'https://www.infobae.com/economia/divisas/dolar-hoy/';  
const urlNews = 'https://www.infobae.com'; 

// const urlDolar = process.env.DOLAR_URL
// const urlNews = process.env.NEWS_URL

const router = express.Router();

router.get('/dolar/v1', async (req, res) => {
  return ScrapeWeb(scrapeWebDolar, urlDolar)(req, res);
});

router.get('/news', async (req, res) => {
  return ScrapeWeb(scrapeWebInfobae, urlNews)(req, res);
});


export default router