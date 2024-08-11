import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'; // Yolu doğru belirttiğinizden emin olun

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Use the `authRoutes` under `/api/auth` prefix
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
