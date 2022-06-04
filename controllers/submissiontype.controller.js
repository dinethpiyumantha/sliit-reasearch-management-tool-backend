import SubmissionType from "../models/submissiontype.model.js";

const addSubmissionType = async (ctx) => {
    try {
        const submissionType = await SubmissionType.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = submissionType;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const getAllSubmissionTypes = async (ctx) => {
    try {
        const submissionTypes = await SubmissionType.find();
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = submissionTypes;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
}

const getSubmissionTypeById = async (ctx) => {
    try {
        const submissionType = await SubmissionType.findById(ctx.request.params.id);
        if (!submissionType) {
            ctx.throw(404, "SubmissionType not found");
        }
        ctx.status = 200;
        ctx.body = submissionType;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
};

export{
    addSubmissionType,
    getAllSubmissionTypes,
    getSubmissionTypeById
}
