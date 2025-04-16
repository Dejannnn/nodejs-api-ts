import express, { Request, Response } from "express";
import routes from "./routes/index";
require("dotenv").config();
const cors = require("cors");
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json';

const app = express();

app.use(cors());

app.use("/api/v1", routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.listen(PORT, () => {
  // Start the server and listen on the specified port
  console.log(`Server is running on http://localhost:${PORT}`); // Log a message indicating the server is running
  console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);

});
