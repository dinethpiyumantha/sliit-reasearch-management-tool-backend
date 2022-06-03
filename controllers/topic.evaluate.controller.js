
import TopicEvaluate from "../models/topic.evaluate.model.js";

const evaluateTopic = async (ctx) => {
    try {
        const topicEvaluate = await TopicEvaluate.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = topicEvaluate;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}



export {
    
    evaluateTopic
};