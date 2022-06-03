import KoaRouter from '@koa/router';
import {
    register
} from '../controllers/staff.controller.js';

//create a new instance for router
const staffRouter = new KoaRouter({
    prefix: '/api/staffs'
});

/**
 * @route POST /api/staff
 * @description Register a new staff member
 */
staffRouter.post('/', register);

export default staffRouter;