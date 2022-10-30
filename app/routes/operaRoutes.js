import operaActions from "../controllers/operas.controller.js";
import express from "express"

const operaRoutes = express.Router();

operaRoutes.post("/",function(req, res){
    operaActions.new
});

export default operaRoutes