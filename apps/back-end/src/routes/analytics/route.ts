import { Router } from "express";
import { getAnalyticsController } from "../../controller/analytics/analytics-controller";

const analytics = Router();

analytics.get("/", getAnalyticsController);

export default analytics;
