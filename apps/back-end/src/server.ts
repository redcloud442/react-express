import cors from "cors";
import express from "express";
import config from "./config/config";
import { errorHandler } from "./middlewares/errorHandler";
import { routeHandler } from "./middlewares/routeHandler";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(routeHandler);

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

export default app;
