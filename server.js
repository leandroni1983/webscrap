import express from 'express';

import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import itemRoutes from './routes/routes.js';
import morgan from 'morgan';
import cors from  'cors'
import swaggerUi from 'swagger-ui-express';
import specs from './swaggerOptions.js';


const app = express();
const PORT = process.env.PORT || 3001;
const mode = process.env.NODE_ENV || 'development';


// Cargar variables de entorno según el modo
if (mode === 'development') {
  dotenv.config({ path: '.env.development' });
} else if (mode === 'production') {
  dotenv.config({ path: '.env.production' });
}
 const corsOptions = {
  origin: process.env.CORS_ORIGIN,    
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
