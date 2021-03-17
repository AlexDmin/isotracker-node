const express = require("express");
const router = express.Router();
const controller = require("../fileController/file.controller");

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.post("/uploadHis", controller.uploadHis);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;