import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Dolar / Noticias' ,
      version: '1.0.0',
      description: 'Una API de LennyCode',
      contact:{
        email:"leandronicolas1983@gmail.com"
      }
    },
  },
  apis: ['./routes/*.js'], // Rutas donde se encuentra la documentación de Swagger
};

const specs = swaggerJsdoc(options);

export default specs;
