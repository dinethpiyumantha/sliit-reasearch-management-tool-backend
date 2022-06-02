import KoaRouter from "@koa/router";
import {
    send,
    getChatByGroupId
} from "../controllers/chat.controller.js";

const chatRouter = new KoaRouter({
    prefix: "/api/chats"
});

chatRouter.post("/", send);
chatRouter.get("/group/:id", getChatByGroupId);

export default chatRouter;