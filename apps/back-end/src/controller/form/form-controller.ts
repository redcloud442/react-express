import { Request, Response } from "express";
import { createFormSubmission } from "../../handler/form/form-handler";

export const createForm = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, utmData } = req.body;

    const form = await createFormSubmission({ name, email, phone, utmData });

    res.status(200).json(form);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
