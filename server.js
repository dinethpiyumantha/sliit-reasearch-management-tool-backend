/**
 * @author RegEx Extractors - SLIIT - AF Group
 * @version [v1.0.0]
 */

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import routers
import studentRouter from './routers/student.router.js';
import groupRouter from './routers/group.router.js';
import chatRouter from './routers/chat.router.js';
import submissionRouter from './routers/submission.router.js';

dotenv.config();

// Initialize the app
const app = new Koa();

app.use(cors());
app.use(bodyParser());

// Router middlewares
app.use(studentRouter.routes()).use(studentRouter.allowedMethods());
app.use(groupRouter.routes()).use(groupRouter.allowedMethods());
app.use(chatRouter.routes()).use(chatRouter.allowedMethods());
app.use(submissionRouter.routes()).use(submissionRouter.allowedMethods());


app.use(ctx => {
  ctx.throw(404, 'API not found');
});

// Connect to the database
mongoose.connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Run the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});