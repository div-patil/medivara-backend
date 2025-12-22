import express from "express";
import  protect  from "../middleware/authMiddleware.js";
import multer from "multer";
import { login, register } from "../controllers/userController.js";
import { contact } from "../controllers/contactController.js";
// import contact from "../controllers/contactController.js";
const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.json({ message: "This is protected data", userId: req.user.id });
});

router.get("/get", (req, res) => {
  res.json("hello");
});

router.post("/register", register);

router.post("/login", login);

router.post("/contact-us",contact);
export default router;
