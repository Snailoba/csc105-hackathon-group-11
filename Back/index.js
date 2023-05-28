import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import multer from "multer";
const PORT = 8000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

// stroage import from website by clicking add
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../front/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  const file = req.file;
  res.status(200).json(file.filename);
})

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
