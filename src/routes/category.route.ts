import express, { Router, Request, Response } from "express";
import { Category, Post } from '../models'

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response): Promise<Response> => {
    const categories: Object[] = await Category.findAll();
    return res.status(200).json({
        success: true,
        message: "Get posts successfully",
        data: categories
    });
});

router.get("/:id", async (req: Request, res: Response): Promise<Response> => {
    const category: Object = await Category.findOne({ where: { id: req.params.id },});
    if (category) {
        return res.status(200).json({
            success: true,
            message: "Get post successfully",
            data: category
        });
    }

    return res.status(404).json({
        success: false,
        message: "Post not found",
        data: null
    });
});

export { router as CategoryRoutes }
