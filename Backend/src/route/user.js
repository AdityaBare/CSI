import {Router} from "express";
import { signup ,login, mySpace} from "../controllers/usercontroller.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();

router.route("/").get(mySpace);
router.route("/login").post(login);
router.route("/signup").post(signup);

export default router;