import EvaluateDoc from "../models/evaluateDoc.model.js";

const submitMark = async (ctx) => {
    try {
        const evaluateDoc = await EvaluateDoc.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = evaluateDoc;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}



export {
    
    submitMark
}