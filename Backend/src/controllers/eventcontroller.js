import Event from "../model/eventmodel.js";
import httpStatus from "http-status";

const addEvent = async (req, res) => {
  console.log("AddEvent");
  try {
    const { name, description, time, location, date } =
      req.body; 
    const event = new Event({
      name,
      description,
      location,
      date,
      time,
     
    });
    console.log(event);

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
    const { eventId } = req.params;

    const event = await Event.findByIdAndDelete(eventId);

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
    const { eventId } = req.params;

    const event = await Event.findByIdAndUpdate(eventId, newEvent, {
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
    const { eventId } = req.params;

    const event = await Event.findById(eventId).populate("participants");
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


export {
  getEvents,
  addEvent,
  deleteEvent,
  updateEvent,
  getParticularEvent,
 
  
};
