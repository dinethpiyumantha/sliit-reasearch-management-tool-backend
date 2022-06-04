import KoaRouter from "@koa/router";
import {
    getAllMarking,
    createMarking
} from "../controllers/markingscheme.controller.js";

const markingRouter = new KoaRouter({
    prefix: "/api/markingschemes"
});

markingRouter.get("/", getAllMarking);
markingRouter.post("/", createMarking);

export default markingRouter;