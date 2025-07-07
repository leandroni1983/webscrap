# � Dollar WebScrap API

Una API simple y poderosa para obtener datos del dólar y noticias económicas desde sitios como Infobae mediante técnicas de scraping. Construida con Node.js, Express, Cheerio y desplegable fácilmente vía Docker. Ideal para integraciones, dashboards, o apps informativas.

---

## � Características

- � Scraping de cotizaciones del dólar desde [Infobae](https://www.infobae.com/economia/divisas/dolar-hoy/)
- � Scraping de noticias económicas
- � API REST con Express
- � Documentación interactiva vía Swagger
- � Contenedor Docker listo para producción
- � CORS habilitado (configurable por entorno)

---

## �️ Tecnologías

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Cheerio](https://cheerio.js.org/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [Docker](https://www.docker.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## � Instalación local

1. Clonar el repositorio:

```bash
git clone https://github.com/leandroni1983/webscrap.git
cd webscrap
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env.development` con:

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

4. Correr el servidor:

```bash
npm start
```

---

## � Uso con Docker

### 1. Construir la imagen

```bash
docker build -t dollar-api .
```

### 2. Correr el contenedor

```bash
docker run -p 3001:3001 --name dollar-api dollar-api
```

---

## � Endpoints

- `GET /api/dolar/v1`: Obtiene cotizaciones del dólar usando scraping básico
- `GET /api/dolar/v2`: Alternativa con otro parser
- `GET /api/news`: Obtiene titulares e imágenes de noticias económicas
- `GET /api-docs`: Documentación Swagger UI

---

## � Swagger

Podés ver la documentación en:  
� `http://localhost:3001/api-docs`

---

## � Estructura del proyecto

```
.
├── Dockerfile
├── package.json
├── server.js
├── .env.development
├── controllers/
│   └── index.js
├── routes/
│   └── routes.js
├── utils/
│   ├── scrapeWebDolar.js
│   └── scrapeWebInfobae.js
└── swaggerOptions.js
```

---

## � TODO / Futuro

- [ ] Agregar scraping de otros sitios (Dólar Blue, BCRA, etc.)
- [ ] Base de datos para guardar histórico
- [ ] Panel frontend
- [ ] Tests automáticos

---

## � Licencia

Este proyecto está bajo la licencia [ISC](LICENSE).

---

## � Contacto

Hecho con � por [Leandro Nicolás](https://github.com/leandroni1983)  
Si te sirve, ¡dejá una ⭐ en el repo!
