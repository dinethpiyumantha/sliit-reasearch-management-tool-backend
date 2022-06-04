import KoaRouter from "@koa/router";

import{
    getAllTemplates,
    createTemplate,
    getFile
} from "../controllers/presentationtemplates.controller.js";

const presentationtemplateRouter = new KoaRouter({
    prefix: "/api/presentationtemplates"
});

presentationtemplateRouter.get("/", getAllTemplates);
presentationtemplateRouter.post("/", createTemplate);
presentationtemplateRouter.get("/:id", getFile);

export default presentationtemplateRouter;