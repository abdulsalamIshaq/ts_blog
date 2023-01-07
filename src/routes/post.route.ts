import express, { Router, Request, Response } from "express";
import { Post, Category } from '../models'

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<Response> => {
    const posts: Object[] = await Post.findAll({ include: Category });
    return res.status(200).json({
        success: true,
        message: "Get posts successfully",
        data: posts
    });
});

router.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    const post: Object = await Post.findOne({ where: { id: req.params.id }, include: Category });
    if (post) {
        return res.status(200).json({
            success: true,
            message: "Get post successfully",
            data: post
        });
    }

    return res.status(404).json({
        success: false,
        message: "Post not found",
        data: null
    });
});

export { router as PostRoutes }
