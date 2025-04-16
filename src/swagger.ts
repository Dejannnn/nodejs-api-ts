import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();
const doc = {
  info: {
    version: "v1.0.0",
    title: "Nodejs API",
    description: "Add some description here",
  },
  host: `localhost:${process.env.PORT || 8080}`,
  basePath: "/api/v1/",
  schemes: ["http", "https"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["src/routes/index.ts"];

swaggerAutogen()(outputFile, endpointsFiles, doc);
