import { Router } from "express";
import { createUserController, getUsersController,loginUserController } from "../controllers/userController.ts";

const router: Router = Router();

router.post("/", createUserController);
router.get("/", getUsersController);
router.post("/login", loginUserController);

export { router };
