import Item from "../models/items.model.js";

export const PutItem =  async (req, res) => {
        try {
          const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
          res.json(updatedItem);
        } catch (error) {
          res.status(500).json({ error: 'Error al actualizar el item' });
        }
      }
