import {Router} from "express";
import {addEvent,getEvents,deleteEvent,updateEvent,registerEvent,getParticularEvent,cancleRegistration} from "../controllers/eventcontroller.js"
const router = Router();

//API for CSI login
router.route("/").get(getEvents);
router.route("/").post(addEvent);
router.route("/:id").put(updateEvent);
router.route("/:id").delete(deleteEvent);

//API for student login
router.route("/:id").get(getParticularEvent);   //also for csi login
router.route("/registration/:eventId").post(registerEvent);
router.route("/registration/:eventId").delete(cancleRegistration);

export default router;