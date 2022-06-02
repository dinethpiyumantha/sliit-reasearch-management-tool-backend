import Group from "../models/group.model.js";

const register = async (ctx) => {
  try {
    const group = await Group.create(ctx.request.body);
    ctx.set("Content-Type", "application/json");
    ctx.status = 200;
    ctx.body = group;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
};

const getAll = async (ctx) => {
  try {
    const groups = await Group.find();
    ctx.set("Content-Type", "application/json");
    ctx.status = 200;
    ctx.body = groups;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const getOneById = async (ctx) => {
  try {
    const group = await Group.findById(ctx.request.params.id);
    if (!group) {
      ctx.throw(404, "Group not found");
    }
    ctx.status = 200;
    ctx.body = group;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const update = async (ctx) => {
  try {
    const group = await Group.findByIdAndUpdate(
      ctx.request.params.id,
      ctx.request.body
    );
    ctx.status = 200;
    ctx.body = group;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const remove = async (ctx) => {
  try {
    const group = await Group.findByIdAndRemove(ctx.request.params.id);
    if (!group) {
      ctx.throw(404, "Group not found");
    }
    ctx.status = 200;
    ctx.body = group;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const getGroupByStudentId = async (ctx) => {
  try {
    const group = await Group.findOne({members: ctx.request.params.id});
    if (!group) {
      ctx.throw(404, "Group not found");
    }
    ctx.status = 200;
    ctx.body = group;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const requestSupervisor = async (ctx) => {};

const requestCoSupervisor = async (ctx) => {};

const submitDocument = async (ctx) => {};


export {
    register,
    getAll,
    getOneById,
    update,
    remove,
    requestSupervisor,
    requestCoSupervisor,
    submitDocument,
    getGroupByStudentId
}