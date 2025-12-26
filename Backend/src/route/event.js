import {Router} from "express";
import {addEvent,getEvents,deleteEvent,updateEvent,registerEvent,getParticularEvent,cancleRegistration,registiredEvents} from "../controllers/eventcontroller.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();

//API for CSI login
router.route("/").get(authMiddleware,getEvents);
router.route("/").post(authMiddleware,addEvent);
router.route("/:eventId").put(authMiddleware ,updateEvent);
router.route("/:eventId").delete(authMiddleware ,deleteEvent);
router.route("/:eventId").get(authMiddleware ,getParticularEvent);   //also for csi login


export default router;