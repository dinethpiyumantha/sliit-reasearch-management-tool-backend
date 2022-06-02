import Chat from "../models/chat.model.js";

const send = async (ctx) => {
    try {
        const chat = await Chat.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = chat;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const getChatByGroupId = async (ctx) => {
    try {
        const chat = await Chat.find({group: ctx.request.params.id});
        if (!chat) {
            ctx.throw(404, "Chat not found");
        }
        ctx.status = 200;
        ctx.body = chat;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

export {
    send,
    getChatByGroupId
}