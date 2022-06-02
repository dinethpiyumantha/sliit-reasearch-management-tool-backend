import KoaRouter from "@koa/router";
import {
  register,
  getAll,
  getOneById,
  update,
  remove,
  requestSupervisor,
  requestCoSupervisor,
  submitDocument,
  getGroupByStudentId
} from "../controllers/group.controller.js";

const groupRouter = new KoaRouter({
    prefix: "/api/groups",
});

groupRouter.post("/", register);
groupRouter.get("/", getAll);
groupRouter.get("/:id", getOneById);
groupRouter.put("/:id", update);
groupRouter.delete("/:id", remove);
groupRouter.post("/:id/request-supervisor", requestSupervisor);
groupRouter.post("/:id/request-co-supervisor", requestCoSupervisor);
groupRouter.post("/:id/submit-document", submitDocument);
groupRouter.get("/student/:id", getGroupByStudentId);

export default groupRouter;