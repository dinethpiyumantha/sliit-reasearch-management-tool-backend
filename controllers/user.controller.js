import User from "../models/user.model.js";

const register = async (ctx) => {
  try {
    const user = await User.create(ctx.request.body);
    ctx.status = 200;
    ctx.body = user;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
}

const getAllUsers = async (ctx) => {
  try {
    const users = await User.find();
    ctx.set("Content-Type", "application/json");
    ctx.status = 200;
    ctx.body = users;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const getUserById = async (ctx) => {
  try {
    const user = await User.findById(ctx.request.params.id);
    if (!user) {
      ctx.throw(404, "User not found");
    }
    ctx.status = 200;
    ctx.body = user;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const updateUser = async (ctx) => {
  try {
    const user = await User.findByIdAndUpdate(
      ctx.request.params.id,
      ctx.request.body
    );
    ctx.status = 200;
    ctx.body = user;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const removeUser = async (ctx) => {
  try {
    const user = await User.findByIdAndRemove(ctx.request.params.id);
    if (!user) {
      ctx.throw(404, "User not found");
    }
    ctx.status = 200;
    ctx.body = user;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

export {
    register,
    getAllUsers,
    getUserById,
    updateUser,
    removeUser
}