import TopicAccept from "../models/topicAccept.model.js";

const submitStatus = async (ctx) => {
    try {
        const topicAccept = await TopicAccept.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = topicAccept;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}



export {
    
    submitStatus
}