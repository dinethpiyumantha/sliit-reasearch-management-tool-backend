import KoaRouter from '@koa/router';
import {
    submitStatus 
} from '../controllers/topicAccept.controller.js';


const topicAcceptRouter = new KoaRouter({
    prefix: '/api/topicAccepts'
});

topicAcceptRouter.post('/', submitStatus);

export default topicAcceptRouter;