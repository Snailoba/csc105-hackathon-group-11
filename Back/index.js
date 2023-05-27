import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const PORT = 8000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
