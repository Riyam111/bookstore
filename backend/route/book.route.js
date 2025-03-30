import express from 'express';
import { getbook } from '../controller/book.controller.js';
const router = express.Router();

router.get("/", getbook);

export default router;