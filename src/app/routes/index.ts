import express from 'express'
import { userRoutes } from '../models/user.routes';

const router = express.Router();
const moduleRoutes = [{
    path: '/user',
    route: userRoutes
}]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export const routes = router;