import KoaRouter from '@koa/router';
import {
    evaluateTopic } from '../controllers/topic.evaluate.controller.js';


const topicEvaluateRouter = new KoaRouter({
    prefix: '/api/topicevaluate'
});

topicEvaluateRouter.post('/', evaluateTopic);

export default topicEvaluateRouter;
