import {Router} from "express";
import { signup ,login} from "../controllers/usercontroller.js";

const router = Router();

router.route("/login").post(login);
router.route("/signup").post(signup);

export default router;