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

const registerEvent = async (req, res) => {
  const { eventId } = req.params;
  const { year, userId, prn } = req.body;
  try {
    const event = await Event.findById(eventId);
    const user = await User.findById(userId);

    const newRegister = new RegisterUser({
      name: user.name,
      year: year,
      prn: prn,
      branch: user.branch,
      email: user.email,
    });

    await newRegister.save();

    event.participants.push(newRegister._id);
    await event.save();

    res
      .status(202)
      .json({
        message: "Registered successfully",
        data: newRegister,
        success: true,
      });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export { getEvents, addEvent, deleteEvent, updateEvent,registerEvent };
