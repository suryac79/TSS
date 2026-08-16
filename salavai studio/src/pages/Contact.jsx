import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";



function Contact() {

    const [name,setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
   
    const handleSubmit = () => {
        if (!name || !phone || !email || !message)
             {
          alert("Please fill all fields");
          return;
           }

         console.log({
         name,
         phone,
         email,
         message,
         });
        
         alert("Message sent successfully!");

         setName("");
         setPhone("");
         setEmail("");
         setMessage("");  

         };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          fontWeight={700}
        >
          Contact Us
        </Typography>

        <Typography
          align="center"
          sx={{ mt: 2, mb: 5 }}
        >
          We'd love to hear from you.
        </Typography>

        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />

        <Typography sx={{ mb: 3 }}>
          Name entered: {name}
        </Typography>

        <TextField
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          fullWidth
          sx={{ mb: 3 }}
        />

        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 3 }}
        />
  
         <Typography>
          {name} | {phone} | {email}
          </Typography>

        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </Container>
    </Box>
  );
}

export default Contact;