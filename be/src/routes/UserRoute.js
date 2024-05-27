import express from "express"
import { usersCreateOne, usersDeleteById, usersGetAll, usersGetById, usersLogin, usersUpdateById } from "../controllers/userController.js";

export const userRoute = express.Router()

userRoute.get("/", usersGetAll);

userRoute.get("/:id", usersGetById);

userRoute.post("/signin", usersCreateOne);

userRoute.post("/login",usersLogin);

userRoute.put("/:id", usersUpdateById);

userRoute.delete("/:id", usersDeleteById);
