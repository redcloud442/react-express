import { NextFunction, Request, Response } from "express";

export const routeHandler = (req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();

  console.log(`Time: ${timestamp} | ${req.method} ${req.originalUrl}`);

  next();
};
