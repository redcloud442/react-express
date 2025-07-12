import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const ZodValidator = (schema: z.ZodSchema, type: "body" | "query" | "params") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[type]);

    if (!result.success) {
      const formatted = result.error.format();
      return res.status(400).json({
        message: "Validation failed",
        errors: formatted,
      });
    }

    (req as unknown as { [key: string]: unknown })[type] = result.data;
    next();
  };
};
