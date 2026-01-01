
import Event from "../model/eventmodel.js";
import User from "../model/usermodel.js";
import RegisterUser from "../model/registerUser.js";

import mongoose from "mongoose";



const registerEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
const userId = req.user.id;
    const event = await Event.findById(eventId);

    if (!event) {
      // check event exist or not
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    const user = await User.findById(userId);

    if (!user) {
      //check user exist or not
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const alreadyRegistered = await RegisterUser.findOne({
      user: userId,
      event: eventId,
    });

    if (alreadyRegistered) {
      return res.status(404).json({
        success: false,
        message: "User already registered for thiis event",
      });
    }

    const newRegister = new RegisterUser({
      name: user.name,
      year:user.year,
      prn: user.prn,
      branch: user.branch,
      email: user.email,
      college:user.college,
      user: userId,
      event: eventId,
    });

    await newRegister.save();

    event.participants.push(newRegister._id);
    await event.save();

    user.event.push(eventId);
    await user.save();

    res.status(202).json({
      message: "Registered successfully",
      data: newRegister,
      success: true,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

const cancelRegistration = async (req, res) => {
  try {
    const { eventId } = req.params;
     const userId = req.user.id;

    const user = await User.findById(userId);
    const event = await Event.findById(eventId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    const registerEvent = await RegisterUser.findOneAndDelete({
      user: userId,
      event: eventId,
    });

    if (!registerEvent) {
      return res.status(404).json({
        success: false,
        message: "User not registred for event",
      });
    }

    await Event.updateOne(
  { _id: eventId },
  { $pull: { participants: registerEvent._id } }
);


    await User.updateOne(
      { _id: userId },
      { $pull: { event: new mongoose.Types.ObjectId(eventId) } }
    );

    res.status(200).json({
      message: "Registration cancelled successfully",
      data: registerEvent,
      success: true,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

const registeredEvents = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("event","name date prize location");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({ data: user.event, success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export {
 
  registerEvent,
  cancelRegistration,
  registeredEvents,
};