import Staff from "../models/staff.model.js"

/**
 * @description Register a new Staff member
 * @param {Context} ctx 
 */

const register = (ctx) => {
    const password = encrypt(ctx.request.body.password);

    try{
        const staff = new staff({
            staffId: ctx.request.body.staffId,
            name: ctx.request.body.name,
            email: ctx.request.body.email,
            phone: ctx.request.body.phone,
            type: ctx.request.body.type,
            password: ctx.request.body.password 
        });

        staff.save();
        ctx.status = 200;
        ctx.body = staff;
    } catch (err){
        ctx.status = 400;
        ctx.body = err;
    }
};