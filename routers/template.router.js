import KoaRouter from "@koa/router";
import {
    getAll,
    create
} from "../controllers/template.controller.js";

const templateRouter = new KoaRouter({
    prefix: "/api/templates"
});

templateRouter.get("/", getAll);
templateRouter.post("/", create);

export default templateRouter;