import Conversation from "../models/conversation.model.js"; // Import the Conversation model
import Message from "../models/message.model.js"; // Import the Message model

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; //protectRoute içindeki req.user=user ile alakalu

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //SOCKETIO FUNCTIONALITY  WILL GO HERE

    // await conversation.save();  // save to database !!
    // await newMessage.save();  // save to database !!

    //this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
  // console.log("Message sent",req.params.id)
};
