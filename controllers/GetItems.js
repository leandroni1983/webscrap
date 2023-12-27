import Item from '../models/items.model.js';

export const getItems = async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los items' });
    }
  };