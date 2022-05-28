import Student from "../models/student.model.js";

const register = (ctx) => {
  // Find student, if it is available create a new student
  Student.create(ctx.request.body)
    .then((student) => {
      ctx.status = 201;
      ctx.body = student;
    })
    .catch((err) => {
      ctx.throw(500, err);
      ctx.body = err;
    });
};

const getAll = (ctx) => {
  // try{
  //     const students = Student.find();
  //     ctx.body = students;
  // } catch (err) {
  //     ctx.throw(500, err);
  // }

  Student.find({}, (err, students) => {
    if (err) {
      ctx.throw(500, err);
    }
    ctx.status = 200;
    ctx.body = students;
  });
};

const getOne = (ctx) => {};

const update = (ctx) => {};

const remove = (ctx) => {};

export { register, getAll, getOne, update, remove };
