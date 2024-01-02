import express from 'express';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import itemRoutes from './routes/routes.js';
import morgan from 'morgan';
import cors from  'cors'


import swaggerUi from 'swagger-ui-express';
import specs from './swaggerOptions.js';


const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
//mongoose.connect('mongodb://localhost:27017/miCrudDB', { useNewUrlParser: true, useUnifiedTopology: true });


const corsOptions = {
  origin: 'http://localhost:3001',  // Reemplaza 3000 con el puerto que estés utilizando
  optionsSuccessStatus: 200 // Algunas versiones de navegador/axios pueden requerir esta opción
};

// Middleware
app.use(morgan('dev'));
app.use(cors(corsOptions))
app.use(bodyParser.json());


// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Usar las rutas
app.use('/api', itemRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
