import Student from "../models/student.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

/**
 * @description Register a new student
 * @param {Context} ctx
 */
const register = (ctx) => {
  const password = encrypt(ctx.request.body.password);

  try {
    const student = new Student({
      name: ctx.request.body.name,
      email: ctx.request.body.email,
      password: password,
      studentId: ctx.request.body.studentId,
      type: ctx.request.body.type,
      phone: ctx.request.body.phone,
    });

    student.save();
    ctx.status = 200;
    ctx.body = student;
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
};

/**
 * @description Login a student
 * @param {Context} ctx
 */
const login = async (ctx) => {
  try {
    const student = await Student.findOne({ studentId: ctx.request.body.studentId });

    if (!student) {
      ctx.status = 400;
      ctx.body = "Invalid User Id or password";
    } else {
      const password = decrypt(student.password);
      if (password === ctx.request.body.password) {
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = {
          token: jwt.sign(
            {
              email: student.email,
              _id: student._id,
            },
            process.env.SECRET,
            { expiresIn: "5d" }
          ),
          user: {password, ...student._doc},
        };
      } else {
        ctx.throw(401, "Wrong password");
      }
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = err;
  }
};

/**
 * @description Get all students
 * @param {Context} ctx
 */
const getAll = async (ctx) => {
  try {
    const students = await Student.find();
    ctx.set("Content-Type", "application/json");
    ctx.status = 200;
    ctx.body = students;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

/**
 * @description Get a student by id
 * @param {Context} ctx
 */
const getOneById = async (ctx) => {
  try {
    const student = await Student.findById(ctx.params.id);
    if (!student) {
      ctx.throw(404, "Student not found");
    }
    ctx.status = 200;
    ctx.body = student;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

/**
 * @description Update a student by id
 * @param {Context} ctx
 */
const update = async (ctx) => {
  try {
    const student = await Student.findByIdAndUpdate(
      ctx.params.id,
      ctx.request.body
    );
    ctx.status = 200;
    ctx.body = student;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

/**
 * @description Delete a student by id
 * @param {Context} ctx
 */
const remove = async (ctx) => {
  try {
    const student = await Student.findByIdAndDelete(ctx.params.id);
    ctx.status = 200;
    ctx.body = student;
  } catch (err) {
    ctx.throw(500, err);
    ctx.body = err;
  }
};

const authenticateToken = async (ctx, next) => {
  const authHeader = ctx.request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return ctx.throw(401, "No token provided");

  await jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return ctx.throw(403, "Invalid token");
    ctx.state.user = user;
    return next();
  });
};

const encrypt = (text) => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(
    process.env.ALGORITHM,
    process.env.SECRET,
    iv
  );

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    process.env.ALGORITHM,
    process.env.SECRET,
    Buffer.from(hash.iv, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

export {
  register,
  login,
  getAll,
  getOneById,
  update,
  remove,
  authenticateToken,
};
