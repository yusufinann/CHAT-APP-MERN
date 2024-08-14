import jwt from "jsonwebtoken";
import User from "../models/user.model.js";  // Import the User model

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(400).json({ error: "Unauthorized - No token provided." });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(400).json({ error: "Unauthorized - Invalid token." });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(400).json({ error: "Unauthorized - User not found." });
        }

        req.user = user;
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error." });
    }
};

export default protectRoute;
