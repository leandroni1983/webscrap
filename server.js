import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import itemRoutes from './routes/routes.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/miCrudDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


// Usar las rutas
app.use('/items', itemRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
