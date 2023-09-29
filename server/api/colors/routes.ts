import { Router } from "express";
const router = Router();

import getEvalPair from "./getEvalPair";
router.get("/getEvalPair", getEvalPair);

import reportResult from "./reportResult";
router.post("/reportResult", reportResult);

export default router;
