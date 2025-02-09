import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public")); 
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";
import jobRouter from "./routes/job.routes.js";
import companyRouter from "./routes/company.routes.js";
import applicationRouter from "./routes/application.routes.js";

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/companies", companyRouter);
app.use("/api/v1/applications", applicationRouter);

export { app };
