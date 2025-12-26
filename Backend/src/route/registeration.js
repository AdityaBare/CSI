import {Router} from "express";
import {registerEvent,cancleRegistration,registiredEvents} from "../controllers/registerationcontroller.js"
import { getParticularEvent } from "../controllers/eventcontroller.js";

const router = Router();



router.route("/:id").get(getParticularEvent);  
router.route("/:eventId").post(registerEvent);
router.route("/:eventId").delete(cancleRegistration);
router.route("/").get(registiredEvents);

export default router;