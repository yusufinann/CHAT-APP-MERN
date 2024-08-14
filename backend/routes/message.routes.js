import express from "express"
import {getMessages, sendMessages} from   "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router=express.Router();

router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessages) //protectRoute controls whether user login before send message
export default router