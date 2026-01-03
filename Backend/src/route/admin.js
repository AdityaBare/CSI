import {Router} from "express";
import { signup ,login, count} from "../controllers/admincontroller.js";
const router = Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/").get(count);

export default router;