import Item from '../models/items.model.js';

export const PostItem = async (req, res) => {
        try {
          const newItem = new Item(req.body);
          await newItem.save();
          res.status(201).json(newItem);
        } catch (error) {
          res.status(500).json({ error: 'Error al crear un nuevo item' });
        }
      }
