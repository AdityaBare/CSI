import {Router} from "express";
import {addEvent,getEvents,deleteEvent,updateEvent} from "../controllers/eventcontroller.js"
const router = Router();

router.route("/").get(getEvents);
router.route("/").post(addEvent);
router.route("/:id").put(updateEvent);
router.route("/:id").delete(deleteEvent);

export default router;