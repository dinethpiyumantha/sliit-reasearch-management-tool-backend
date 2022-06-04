import Template from "../models/template.model.js";

const create = async (ctx) => {
    try {
        const template = await Template.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = template;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
};

const getAll = async (ctx) => {
    try {
        const templates = await Template.find();
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = templates;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
};

const getFile = async (ctx) => {
    try {
        const template = await Template.findById(ctx.params.id);
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = template.file;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
};

export {
    getAll,
    create
}