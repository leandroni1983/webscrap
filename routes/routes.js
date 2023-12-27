import express from 'express';
//import {PutItem, getItems,PostItem ,DeleteItem, mostrarMensaje} from '../controllers'

import { ScrapeWeb } from '../controllers/Scrape.controller.js';
import {getItems} from '../controllers/GetItems.js'
import { PostItem } from '../controllers/PostItem.js';
import { PutItem } from '../controllers/PutItem.js';
import { DeleteItem } from '../controllers/DeleteItem.js';


const router = express.Router();

router.get('/',ScrapeWeb);

// router.get('/items', getItems );
  
// router.post('/items', PostItem);

// router.put('/items/:id',PutItem);

// router.delete('/items/:id',DeleteItem);

export default router