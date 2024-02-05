import ticketControl from "../controller/ticketcontrol.js";
import express from "express";

const router =  express.Router();

router.post("/api/tickets", ticketControl.addTicket);
router.get("/api/tickets", ticketControl.getTicket);
router.put("/api/tickets/:id", ticketControl.updateTicket);
router.delete("/api/tickets/:id", ticketControl.removeTicket);

export default router;