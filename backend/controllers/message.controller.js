import Conversation from "../models/conversation.model.js"; // Import the Conversation model
import Message from "../models/message.model.js"; // Import the Message model

export const sendMessages = async (req, res) => {
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

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    
    if(!conversation){
      return res.status(200).json([]);
    }
    const messages=conversation.messages
    res.status(200).json(messages);
    // console.log("Message got : ",req.params.id)
  } catch (error) {
    console.log("Error in getMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
