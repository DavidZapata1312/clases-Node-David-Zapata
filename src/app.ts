import express from "express";
import { router as userRouter } from "./routes/usersRoutes.ts";
import "./cron-job/dailyArt.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
