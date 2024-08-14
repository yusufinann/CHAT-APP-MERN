import express from "express"
import {sendMessage} from   "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router=express.Router();

router.post("/send/:id",protectRoute,sendMessage) //protectRoute controls whether user login before send message
export default router