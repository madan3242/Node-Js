import express from "express";
import { 
    createUser, 
    deleteUser, 
    updateUser, 
    userLogin 
} from "../controllers/userController.js";

const router = express.Router();

router.route("/create").post(createUser);
router.route("/login").post(userLogin);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

export default router;