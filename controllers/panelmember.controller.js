import Panelmember from "../models/panelmember.model.js";

const create = async (ctx) => {
    try {
        const panelmember = await Panelmember.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = panelmember;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const getAll = async (ctx) => {
    try {
        const panelmembers = await Panelmember.find();
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = panelmembers;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const pushGroup = async (ctx) => {
    try {
        const panelmember = await Panelmember.findById(ctx.request.params.id);
        if (!panelmember) {
            ctx.throw(404, "Panelmember not found");
        }
        panelmember.groups.push(ctx.request.body.group);
        await panelmember.save();
        ctx.status = 200;
        ctx.body = panelmember;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

export { create, pushGroup, getAll };