import { Router } from "express";
import { createForm } from "../../controller/form/form-controller";
import { createFormSchema } from "../../utils/schema";
import { ZodValidator } from "../../utils/validator";

const formRoute = Router();

formRoute.post("/", ZodValidator(createFormSchema, "body"), createForm);

export default formRoute;
