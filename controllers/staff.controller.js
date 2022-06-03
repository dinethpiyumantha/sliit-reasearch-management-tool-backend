import Staff from "../models/staff.model.js"

/**
 * @description Register a new Staff member
 * @param {Context} ctx 
 */


 const register = async (ctx) => {
    try {
      const staff = await Staff.create(ctx.request.body);
      ctx.status = 200;
      ctx.body = staff;
    } catch (err) {
      ctx.status = 400;
      ctx.body = err;
    }
  };
  
 
export {
    register
  };
