import {Router} from "express";
import {addEvent,getEvents,deleteEvent,updateEvent,registerEvent} from "../controllers/eventcontroller.js"
const router = Router();

router.route("/").get(getEvents);
router.route("/").post(addEvent);
router.route("/:id").put(updateEvent);
router.route("/:id").delete(deleteEvent);
router.route("/register/:eventId").post(registerEvent);

export default router;