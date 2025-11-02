import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDb from "./config/db.js";
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config();
connectDb();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => {
  res.send("Course API is running...");
});

app.use("/api/courses", courseRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
