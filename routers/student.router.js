import KoaRouter from '@koa/router';
import {
    register,
    getAll,
    getOneById,
    update,
    remove
} from '../controllers/student.controller.js';

const studentRouter = new KoaRouter({
    prefix: '/api/students'
});

studentRouter.post('/', register);
studentRouter.get('/', getAll);
studentRouter.get('/:id', getOneById);
studentRouter.put('/:id', update);
studentRouter.delete('/:id', remove);

export default studentRouter;