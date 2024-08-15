import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'; // Yolu doğru belirttiğinizden emin olun
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';
dotenv.config(); // Load environment variables from .env file

const app = express(); // `app` nesnesi burada tanımlandı

app.use(express.json()); // `app` tanımlandıktan sonra kullanılabilir
app.use(cookieParser())

// Use the `authRoutes` under `/api/auth` prefix
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
