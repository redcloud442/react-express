import { Request, Response } from "express";
import { trackPageVisit } from "../../handler/tracking/tracking-handler";

export const trackPageVisitController = async (req: Request, res: Response) => {
  try {
    const pageVisit = await trackPageVisit();

    res.status(200).json({ message: "Page visit tracked", pageVisit });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
