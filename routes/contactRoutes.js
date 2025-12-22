import express from "express";
const router = express.Router();

const { contact } = require("../controllers/contactController");

router.post("/contact", contact);

export default router;
