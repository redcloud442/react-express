import { trackPageVisitController } from "@/controller/tracking/tracking-controller";
import { Router } from "express";

const tracking = Router();

tracking.put("/", trackPageVisitController);

export default tracking;
