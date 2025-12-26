import Event from "../model/eventmodel.js";
import User from "../model/usermodel.js";
import RegisterUser from "../model/registerUser.js";
import httpStatus from "http-status";

const addEvent = async (req, res) => {
  try {
    const { name, description, time, location, logo, status, date, price } =
      req.body;

    const event = new Event({
      name,
      description,
      location,
      date,
      time,
      price,
      status,
      logo,
    });

    await event.save();
    res
      .status(httpStatus.CREATED)
      .json({ message: "Event is added", success: true });
  } catch (err) {
    res.status(500).json({ message: `${err.message}`, success: false });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const newEvent = req.body;
    const { id } = req.params;

    const event = await Event.findByIdAndUpdate(id, newEvent, {
      new: true,
      runValidators: true,
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getEvents = async (req, res) => {
  try {
    const event = await Event.find();
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getParticularEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findById(id).populate("participants");
    if (!event) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "Event not found", success: false });
    }
    res
      .status(httpStatus.OK)
      .json({ message: "Event found.", data: event, success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

const registerEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { year, userId, prn } = req.body;
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
      year: year,
      prn: prn,
      branch: user.branch,
      email: user.email,
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

const cancleRegistration = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId } = req.body;

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
        message: "Registration cancelled successfully",
      });
    }
    res.status(202).json({
      message: "Registration cancle",
      data: registerEvent,
      success: true,
    });

  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export {
  getEvents,
  addEvent,
  deleteEvent,
  updateEvent,
  registerEvent,
  getParticularEvent,
  cancleRegistration
};
