import cloudinary from "../lib/cloudinary.js";
import Message from "../models/Message.js";
import User from "../models/User.js";

export const getAllContacts = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUser = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); //here we are loading all the user from the database but excluding ourselves and -password method exclude the password object from sending to the client

    res.status(200).json(filteredUser);
  } catch (error) {
    console.log("Error in getAllContacts", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getMessagesByUserId = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params; // this id is from the /:id from the get route in message.route.js

    // let say me and you are messaging
    // there could be two cases Either I am the sender and you are the reciver and vice versa

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controler ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageURl;
    if (image) {
      // upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image); // take the image
      imageURl = uploadResponse.secure_url; // and upload it to the cloudianry servers
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageURl,
    });

    await newMessage.save();

    //todo: Send message in realtime if usser is online - socket.io

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getChatPartners = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //find all the messages where the logged in user is either sender or reciver
    const messages = await Message.find({
      $or: [{ senderId: loggedInUserId }, { receiverId: loggedInUserId }],
    });

    const chatPartnerIds = [ //for avoiding duplicates 
      ...new Set(
        messages.map((msg) =>
          //if user is me, we will get other user id other wise mise in the UI
          msg.senderId.toString() === loggedInUserId.toString()
            ? msg.receiverId.toString()
            : msg.senderId.toString(),
        ),
      ),
    ];

    const chatPartners = await User.find({_id: {$in: chatPartnerIds}}).select("-password")
    res.status(200).json(chatPartners)

    
  } catch (error) {
    console.log("Error in getChatPartners: ", error.message);
    res.status(500).json({ error: "Internal server error "});
    
  }
};
