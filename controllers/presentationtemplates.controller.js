import PresentationTemplate from "../models/presentationtemplates.model.js";

const createTemplate = async (ctx) => {
    try {
        const presentationtemplate = await PresentationTemplate.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = presentationtemplate;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const getAllTemplates = async (ctx) => {
    try {
        const presentationtemplates = await PresentationTemplate.find();
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = presentationtemplates;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const getFile = async (ctx) => {
    try {
        const presentationtemplate = await PresentationTemplate.findById(ctx.params.id);
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = presentationtemplate.file;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

export{
    getAllTemplates,
    createTemplate,
    getFile
}