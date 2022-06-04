import KoaRouter from "@koa/router";
import {
    uploadFile,
    getAll,
    create
} from "../controllers/submission.controller.js";

const submissionRouter = new KoaRouter({
    prefix: "/api/submissions"
});

submissionRouter.get("/", getAll);
submissionRouter.post("/", create);
submissionRouter.put("/:id", uploadFile);

export default submissionRouter;