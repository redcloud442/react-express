import { Request, Response } from "express";
import { getAnalytics } from "../../handler/analytics/analytics-handler";

export const getAnalyticsController = async (req: Request, res: Response) => {
  try {
    const analytics = await getAnalytics();

    res.status(200).json({ message: "Analytics fetched", analytics });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
