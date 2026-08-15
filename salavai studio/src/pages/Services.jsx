import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router";
import ServiceSection from "../components/Servicesection";

function Services() {
  return (
    <Box>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h2"
          fontWeight={700}
          align="center"
        >
          Our Services
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 2 }}
        >
          Professional laundry care for all your clothing needs.
        </Typography>
      </Container>
{/* washing */}
    <Container sx={{ py: 6 }}>
       <ServiceSection
         title="Washing"
         image="/laundry/washing.jpeg"
         description="We provide professional washing services using high-quality detergents
          and modern equipment to keep your clothes fresh, clean, and well cared
          for."/>
    </Container>
{/* dry cleaning */}
    <Container sx={{ py: 6 }}>
      <ServiceSection
      title="dry cleaning"
      image="/laundry/dry_cleaning.jpeg"
      description="Our dry cleaning service removes stains and dirt while protecting
        delicate fabrics. Ideal for formal wear, suits, dresses, and special
        garments."
      reverse/>
      
    </Container>
{/* ironing */}
    <Container sx={{ py: 6 }}>
       <ServiceSection
       title="Ironing"
       image="/laundry/ironing.jpeg"
       description="Get crisp, wrinkle-free clothes with our professional ironing service.
       Perfect for daily wear, office wear, and special occasions."/>
    </Container>
{/* CTA */}
<Container sx={{ py: 8 }}>
  <Box
    sx={{
      textAlign: "center",
      p: 5,
      borderRadius: 3,
      backgroundColor: "#f5f5f5",
    }}
  >
    <Typography
      variant="h4"
      fontWeight={700}
    >
      Ready to Schedule a Pickup?
    </Typography>

    <Typography sx={{ mt: 2, mb: 4 }}>
      Let us handle your laundry while you focus on what matters most.
    </Typography>

    <Button
      variant="contained"
      size="large"
      component={NavLink}
      to="/booking"
    >
      Book a Pickup
    </Button>
  </Box>
</Container>

    </Box>
  );
}

export default Services;