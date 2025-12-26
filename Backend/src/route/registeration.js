import {Router} from "express";
import {registerEvent,cancleRegistration,registiredEvents} from "../controllers/registerationcontroller.js"
import { getParticularEvent } from "../controllers/eventcontroller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();


router.route("/").get(authMiddleware ,registiredEvents);
router.route("/:eventId").get(authMiddleware ,getParticularEvent);  
router.route("/:eventId").post(authMiddleware,registerEvent);
router.route("/:eventId").delete(authMiddleware ,cancleRegistration);

export default router;