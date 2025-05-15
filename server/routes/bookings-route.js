const express = require("express");
const router = express.Router();
const BookingModel = require("../models/booking-model");
const validateToken = require("../middlewares/validate-token");
const EventModel = require("../models/event-model");

router.post("/create-booking", validateToken, async (req, res) => {
  try {
    req.body.user = req.user._id;
    const booking = await BookingModel.create(req.body);
    const event = await EventModel.findById(req.body.event);
    const ticketTypes = event.ticketTypes;

    const updatedTicketTypes = ticketTypes.map((ticketType) => {
      if (ticketType.name === req.body.ticketType) {
        ticketType.booked =
          Number(ticketType.booked || 0) + Number(req.body.ticketsCount);

        ticketType.available =
          Number(ticketType.available || ticketType.limit) -
          Number(req.body.ticketsCount);
      }
      return ticketType;
    });
    await EventModel.findByIdAndUpdate(
      req.body.event,
      { ticketTypes: updatedTicketTypes },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Booking created successfully", newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Error creating booking" });
  }
});

module.exports = router;
