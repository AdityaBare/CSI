import {Router} from "express";
import { signup } from "../controllers/usercontroller.js";

const router = Router();

router.route("/login");
router.route("/signup").post(signup);

export default router;