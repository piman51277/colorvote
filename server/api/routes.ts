import { Router } from "express";
const router = Router();

import colorHandler from "./colors/routes";
router.use("/colors", colorHandler);

export default router;
