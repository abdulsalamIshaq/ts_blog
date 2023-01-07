

import express, { Router } from 'express'
import { CategoryRoutes } from './category.route'

import { PostRoutes } from './post.route'

const router = express.Router()

interface Route {
    path: string
    routes: Router
}

const routes: Route[] = [
    {
        path: '/posts',
        routes: PostRoutes,
    },
    {
        path: '/categories',
        routes: CategoryRoutes,
    }
]

routes.forEach((route: Route) => {
    router.use(route.path, route.routes)
})

export { router }