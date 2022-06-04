import KoaRouter from "@koa/router";
import {
    addSubmissionType,
    getAllSubmissionTypes,
    getSubmissionTypeById  
} from "../controllers/submissiontype.controller.js";

const submissionTypeRouter = new KoaRouter({
    prefix: "/api/submissiontypes"
});

submissionTypeRouter.post("/", addSubmissionType);
submissionTypeRouter.get("/", getAllSubmissionTypes);
submissionTypeRouter.get("/:id", getSubmissionTypeById);

export default submissionTypeRouter;