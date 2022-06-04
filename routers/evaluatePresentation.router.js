import KoaRouter from '@koa/router';
import {
    submitEvaluatedMark 
} from '../controllers/evaluatePresentation.controller.js';


const evaluatePresentationRouter = new KoaRouter({
    prefix: '/api/evaluatePresentations'
});

evaluatePresentationRouter.post('/', submitEvaluatedMark);

export default evaluatePresentationRouter;