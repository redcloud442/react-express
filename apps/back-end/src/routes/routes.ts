import { Router } from "express";
import analytics from "./analytics/route";
import formRoute from "./form/route";
import tracking from "./tracking/route";

const router = Router();

router.use("/form", formRoute);

router.use("/analytics", analytics);

router.use("/tracking", tracking);

export default router;
