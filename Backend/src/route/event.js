import {Router} from "express";
import {addEvent,getEvents,deleteEvent,updateEvent,getParticularEvent} from "../controllers/eventcontroller.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();

//API for CSI login
router.route("/").get(getEvents);
router.route("/").post(addEvent);
router.route("/:eventId").put(updateEvent);
router.route("/:eventId").delete(deleteEvent);
router.route("/:eventId").get(getParticularEvent);   //also for csi login


export default router;