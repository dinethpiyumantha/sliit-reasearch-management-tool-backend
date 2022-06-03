import KoaRouter from '@koa/router';
import {
    submitMark 
} from '../controllers/evaluateDoc.controller.js';


const evaluateDocRouter = new KoaRouter({
    prefix: '/api/evaluateDocs'
});

evaluateDocRouter.post('/', submitMark);

export default evaluateDocRouter;