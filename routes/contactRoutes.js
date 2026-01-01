import express from "express";
import  { contact } from "../controllers/ContactController.js";
// const { contact } = require("../controllers/contactController");
const router = express.Router();
router.post("/", contact);

export default router;
