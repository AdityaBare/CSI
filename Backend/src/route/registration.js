import {Router} from "express";
import {registerEvent,cancelRegistration,registeredEvents} from "../controllers/registrationcontroller.js"
import { getParticularEvent } from "../controllers/eventcontroller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();


router.route("/").get(authMiddleware ,registeredEvents);
router.route("/:eventId").get(authMiddleware ,getParticularEvent);  
router.route("/:eventId").post(authMiddleware,registerEvent);
router.route("/:eventId").delete(authMiddleware ,cancelRegistration);

export default router;