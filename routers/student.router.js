import KoaRouter from '@koa/router';
import {
    register,
    getAll,
    getOneById,
    update,
    remove
} from '../controllers/student.controller.js';

// Create a new router instance
const studentRouter = new KoaRouter({
    prefix: '/api/students'
});


/**
 * @route POST /api/students
 * @description Register a new student
 */
studentRouter.post('/', register);

/**
 * @route GET /api/students
 * @description Get all students
 */
studentRouter.get('/', getAll);

/**
 * @route GET /api/students/:id
 * @description Get a student by id
 */
studentRouter.get('/:id', getOneById);

/**
 * @route PUT /api/students/:id
 * @description Update a student by id
 */
studentRouter.put('/:id', update);

/**
 * @route DELETE /api/students/:id
 * @description Delete a student by id
 */
studentRouter.delete('/:id', remove);

export default studentRouter;