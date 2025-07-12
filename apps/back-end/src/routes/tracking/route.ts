import { Router } from "express";
import { trackPageVisit } from "../../handler/tracking/tracking-handler";

const tracking = Router();

tracking.put("/", trackPageVisit);

export default tracking;
