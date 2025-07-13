import { Router } from "express";
import { trackPageVisitController } from "../../controller/tracking/tracking-controller";

const tracking = Router();

tracking.put("/", trackPageVisitController);

export default tracking;
