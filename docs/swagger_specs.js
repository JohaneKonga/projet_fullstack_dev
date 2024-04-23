const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API DOCS",
      version: "1.0.0",
      description:
        "Collecter et stocker les données d’achat des utilisateurs, telles que les produits achetés, les catégories préférées et les fréquences d’achat.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./docs/*.js", "./docs/api/*.js"],
};
const specs = swaggerJSDoc(swaggerOptions);
module.exports = specs;
