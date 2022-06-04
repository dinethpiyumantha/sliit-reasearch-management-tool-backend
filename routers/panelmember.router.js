import KoaRouter from '@koa/router';
import { create, pushGroup, getAll } from '../controllers/panelmember.controller.js';

// Create a new router instance
const panelmemberRouter = new KoaRouter({
    prefix: '/api/panelmembers'
});


panelmemberRouter.post('/', create);
panelmemberRouter.get('/', getAll);
panelmemberRouter.put('/addgroup/:id', pushGroup);

export default panelmemberRouter;