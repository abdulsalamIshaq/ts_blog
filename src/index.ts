import express from "express";
import * as dotenv from 'dotenv';
import db from "./configs/database";
import { router } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use(router);

const start = async (): Promise<void> => {
    try {
        const PORT = process.env.PORT;

        await db.sync();

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to DB', error);
        process.exit(1);
    }
};

void start();