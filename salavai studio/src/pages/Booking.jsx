import { Box, Button, Container, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Booking() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [instructions, setInstructions] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    
    const handleBooking = () => {
   if (!name || !phone || !service || !pickupDate || !timeSlot) {
        // if (!name || !phone || !service || !pickupDate || !timeslot) {
    alert("Please fill all required fields");
    return;
  }

  console.log({
    name,
    phone,
    service,
    pickupDate,
    timeSlot,
    instructions,
  });

  alert("Booking submitted successfully!");

  setName("");
  setPhone("");
  setService("");
  setPickupDate("");
  setInstructions("");
  setTimeSlot("");
};

  return (
    <Box>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          fontWeight={700}
        >
          Book a Service
        </Typography>

        <Typography
          align="center"
          sx={{ mt: 2 }}
        >
          Schedule your laundry pickup in minutes.
        </Typography>

       <TextField
         label="Name"
         required
         value={name}
         onChange={(e) => setName(e.target.value)}
         fullWidth
         sx={{ mt: 4, mb: 3 }}
         />

        <TextField
         label="Phone Number"
         required
         value={phone}
         onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))

         }
         input props={{maxLength:10,}}
         fullWidth
         sx={{ mb: 3 }}
         />

        <TextField
         select
         label="Service"
         required
         value={service}
         onChange={(e) => setService(e.target.value)}
         fullWidth
         sx={{ mb: 3 }}
         >
         <MenuItem value="Washing">Washing</MenuItem>
         <MenuItem value="Dry Cleaning">Dry Cleaning</MenuItem>
         <MenuItem value="Ironing">Ironing</MenuItem>
         </TextField>

        <TextField
         type="date"
         value={pickupDate}
         onChange={(e) => setPickupDate(e.target.value)}
         fullWidth
         sx={{ mb: 3 }}
         />
         

        <TextField
         select
         label="Pickup Time Slot"
         value = {timeSlot}
         onChange={(e) => setTimeSlot(e.target.value)}
         fullWidth
         sx={{ mb: 3 }}
         >
        <MenuItem value="09:00-11:00">09:00 AM - 11:00 AM</MenuItem>
         <MenuItem value="11:00-01:00">11:00 AM - 01:00 PM</MenuItem>
         <MenuItem value="02:00-04:00">02:00 PM - 04:00 PM</MenuItem>
         <MenuItem value="04:00-06:00">04:00 PM - 06:00 PM</MenuItem>
         </TextField>

         <TextField
         label="Special Instructions"
         value={instructions}
         onChange={(e) => setInstructions(e.target.value)}
         multiline
         rows={4}
         fullWidth
         sx={{ mb: 3 }}
         />

        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleBooking}
         >
         Book Pickup
        </Button>
</Container>

          </Box>
  );
}

export default Booking;