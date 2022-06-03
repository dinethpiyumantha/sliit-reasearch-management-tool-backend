import multer from 'multer';
import Submission from '../models/submission.model.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/submissions");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");

const uploadFile = async (ctx) => {
    try{
        let submission = await Submission.findById(ctx.request.params.id);
        if(!submission){
            ctx.throw(404, "Submission not found");
        }
        upload(ctx.req, ctx.req.file, (err) => {
            if(err) {
                ctx.throw(500, err);
            }
            submission.submissions.push({group: ctx.req.body.group, file: ctx.req.file.path});
            submission.save();
        })
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = submission;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
};


const create = async (ctx) => {
    try {
        const submission = await Submission.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = submission;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
};

const getAll = async (ctx) => {
    try {
        const submissions = await Submission.find();
        ctx.set("Content-Type", "application/json");
        ctx.status = 200;
        ctx.body = submissions;
    } catch (err) {
        ctx.throw(500, err);
        ctx.body = err;
    }
};

export {
    uploadFile,
    getAll,
    create
}