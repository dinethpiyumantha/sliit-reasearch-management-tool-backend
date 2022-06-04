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
groupRouter.put("/request/supervisor/:id", requestSupervisor);
groupRouter.put("/request/cosupervisor/:id", requestCoSupervisor);
groupRouter.post("/:id/submit-document", submitDocument);
groupRouter.get("/student/:id", getGroupByStudentId);


export default groupRouter;