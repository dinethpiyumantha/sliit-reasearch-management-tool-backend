import Marking from "../models/markingscheme.model.js";

const createMarking = async (ctx) => {
    try {
        const marking = await Marking.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = marking;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const getAllMarking = async (ctx) => {
    try {
        const markings = await Marking.find();
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = markings;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

export{
    getAllMarking,
    createMarking
}