import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import studentRouter from './routers/student.router.js';

dotenv.config();

// Initialize the app
const app = new Koa();

app.use(cors());
app.use(bodyParser());

// Router middlewares
app.use(studentRouter.routes()).use(studentRouter.allowedMethods());

app.use(ctx => {
  ctx.body = '<h2>404 Not Found</h2>';
});

mongoose.connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Run the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});