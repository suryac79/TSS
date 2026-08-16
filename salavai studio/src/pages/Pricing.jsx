import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { NavLink } from "react-router";

function Pricing() {
    const pricingData = [
  {
    service: "Washing",
    price: "₹99/kg",
    description:"Everyday laundry care",
    popular:true,
  },
  {
    service: "Dry Cleaning",
    price: "₹149/item",
    description:"premium garment cleaning",
     popular:false,

  },
  {
    service: "Ironing",
    price: "₹15/item",
    description:"wrinkle-free finishing",
     popular:false,

  },
];
  return (
    <>
    <Box>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          fontWeight={700}
        >
          Pricing
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 2 }}
        >
          Transparent pricing with no hidden charges.
        </Typography>
      </Container>
    </Box>

    <Container sx={{ pb: 8 }}>
  <Box
    sx={{
      display: "flex",
      gap: 3,
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {pricingData.map((item) => (
      <Card
        key={item.service}
        sx={{
          width: 300,
           textAlign: "center",
           borderRadius: 3,
           transition: "0.3s",
          "&:hover": {
             transform: "translateY(-8px)",
            border: item.popular ? "2px solid" : "1px solid",
             borderColor: item.popular ? "success.main" : "divider",

             },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight={700}
          >
            {item.popular && (
            <Typography
             sx={{
             color: "success.main",
             fontWeight: 700,
             mb: 1,
             }}
  >
            ⭐ Most Popular
             </Typography>
              )}

            {item.service}
          </Typography>
           
          <Typography sx={{ mt: 1 }}>
            {item.description}
           </Typography>

          <Typography
            variant="h4"
            sx={{ mt: 2 }}
          >
            {item.price}
          </Typography>
        
           <Button
            component={NavLink}
           to="/booking"
          variant="contained"
          sx={{ mt: 3 }}
          >
          Book Now
         </Button>

        </CardContent>
      </Card>
    ))}
  </Box>
</Container>
</>
  );
}

export default Pricing;