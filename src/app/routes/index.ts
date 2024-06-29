import { Router } from "express";

import { AuthRoutes } from "../modules/Auth/auth.routes";
import { ProjectRoutes } from "../modules/Project/project.routes";


const router = Router();

const moduleRoutes = [

    {
        path: "/auth",
        route: AuthRoutes,
    },

    {
        path: "/project",
        route: ProjectRoutes,
    }


]


moduleRoutes.forEach(route => {
    router.use(route.path, route.route)
});


export default router;


