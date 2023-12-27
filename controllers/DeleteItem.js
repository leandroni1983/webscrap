import Item from "../models/items.model.js";

export const DeleteItem = async (req, res) => {
        try {
          await Item.findByIdAndDelete(req.params.id);
          res.json({ message: 'Item eliminado correctamente' });
        } catch (error) {
          res.status(500).json({ error: 'Error al eliminar el item' });
        }
      }
