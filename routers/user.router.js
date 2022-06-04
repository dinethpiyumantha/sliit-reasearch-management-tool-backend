import KoaRouter from "@koa/router";
import {
    register,
    getAllUsers,
    getUserById,
    updateUser,
    removeUser
} from "../controllers/user.controller.js";

const userRouter = new KoaRouter({
    prefix: "/api/users"
});

userRouter.post("/", register);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", removeUser);

export default userRouter;