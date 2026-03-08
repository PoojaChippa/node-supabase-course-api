import express from "express";
import courseRoutes from "./routes/courses.js";
import { logger } from "./middleware/logger.js";

const app = express();
app.use(express.json());
app.use(logger);

app.use("/", courseRoutes);

export default app;
