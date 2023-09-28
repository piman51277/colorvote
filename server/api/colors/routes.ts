import { Router } from "express";
const router = Router();

import { getEvalPair } from "./getEvalPair";
router.get("/getEvalPair", getEvalPair);

export default router;
