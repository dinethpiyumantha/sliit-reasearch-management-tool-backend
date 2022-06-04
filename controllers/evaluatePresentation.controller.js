import EvaluatePresentaion from "../models/evaluatePresentation.model.js";

const submitEvaluatedMark = async (ctx) => {
    try {
        const evaluatePresentaion = await EvaluatePresentaion.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = evaluatePresentaion;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}



export {
    
    submitEvaluatedMark
}
