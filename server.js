import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route.js";
import courseRoute from "./routes/course.route.js";
import categoryRoute from "./routes/category.route.js";
import quizRoute from "./routes/quiz.route.js";

import { dirname } from "path";
import { fileURLToPath } from "url";

connectDB();

const app = express();
app.use(express.json());

dotenv.config();
if (process.env.NODE_ENV === "development") {
  //ken executina serveur mode dev
  app.use(morgan("dev")); //afficher historique des routes
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/courses", courseRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/quizzes", quizRoute);

app.listen(
  process.env.PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
