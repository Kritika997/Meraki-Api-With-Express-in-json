const controller = require("../controller/controller");
const express = require("express");
const route= new express.Router()

route.get("/get",controller.get);

route.post("/post",controller.post);

route.put("/put",controller.put);

route.delete("/delete",controller.delete);

module.exports=route