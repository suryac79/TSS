import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

  
function Home() {
    return (
<>
        <Box 
        sx={{
        display:"flex",
        gap:4,
        flexDirection: {xs: "column",md:"row"},
        minHeight:"70vh",
        alignItems:"center",
        px:{xs:2,md:6},
        backgroundColor:"#dce8f4ff",
        }}
        >
            <Box 
            sx={{flex:1,
                display:"flex",
                flexDirection:"column",
                gap:3,
                maxWidth:"600px",
            }}>
            <Typography variant="h1"
            sx={{fontweight:700,
                lineHeight:1.1,
            }}>
                Fresh clothes Fresh day
            </Typography>

            <Typography variant="h6"
            sx={{fontweight:400,}}>
                Professional laundry care, delivered to your doorstep!!!

            </Typography>
            <Button variant="contained"
            sx={{alignSelf:"flex-start",
                px:4,
                py:1.5,
                "&:hover":{transform:"translateY(-2px)",},
            }}>
                Book a pickup
            </Button>
            </Box>
            <Box sx={{flex:1}}>
              <Box component="img" src="https://img.magnific.com/premium-photo/stack-clean-clothes-lying-table-laundry-room-with-washing-machine_972071-4380.jpg?semt=ais_test_b&w=740&q=80"
                alt="laundry"
                sx={{width:"100%",
                    height:{xs:"300px",md:"450px"},//xs small screen md medium and large screen
                    objectFit:"cover",
                    borderRadius:3,}}
                />
            </Box>
            

        </Box>
        
        <Box
            sx={{py:8,
                px:{xs:2,md:6},
                backgroundColor:"blanchedalmond"
                }}>
                    <Typography variant="h2"
                    align="center"
                    sx={{fontweight:700,}}>
                        Our services
                    </Typography>
                    <Typography variant="h6"
                    align="center">
                        Professional laundry for everyday clothes.
                        {/* We offer a wide range of laundry services to meet your needs. */}
                        {/* From wash and fold to dry cleaning, we have you covered. */}
                        {/* Our team of professionals is dedicated to providing the highest quality service and */}
                         {/* ensuring your clothes are returned to you looking their best. */}
                    </Typography>
                <Box sx={{display:"flex",
                    flexDirection:{xs:"column",md:"row"},
                    gap:3, 
                     mt:5, 
                     }}> 
                 <Card sx={{flex:1,
                    p:4,
                    borderRadius:3,
                    boxshadow:2,
                    backgroundColor:"white",
                    overflow:"hidden",
                    transition:"transform 0.2s ease",

                    "&:hover":{transform:"translateY(-5px)"},
                    }}>
                    <CardMedia component="img"
                     height="220"
                     image="/laundry/washing.jpeg"
                     alt="washing">
                    </CardMedia>   
                    <CardContent sx={{p:3}}>
                    <Typography variant="h5" fontweight={600}>
                        Washing
                    </Typography>
                    <Typography sx={{mt:1}}>
                    Fresh and clean anytime
                    </Typography>
                    </CardContent>
                 </Card>  

                 <Card sx={{flex:1,
                    p:4,
                    borderRadius:3,
                    //  boxshadow:2,
                    backgroundColor:"white",
                    overflow:"hidden",
                    transition:"transform 0.2s ease",
                     "&:hover":{transform:"translateY(-5px)"},
                    }}>
                   <CardMedia component="img"
                     height="220"
                     image="/laundry/dry_cleaning.jpeg"
                     alt="dry_cleaning">
                    </CardMedia>   
                        
                    <CardContent sx={{p:3}}>
                    <Typography variant="h5" fontweight={600}>
                        Dry cleaning
                    </Typography>
                    <Typography sx={{mt:1}}>
                    Gentle care for your delicate garments.
                    </Typography>
                    </CardContent>
                 </Card>
                 <Card sx={{flex:1,
                    p:4,
                    borderRadius:3,
                    boxshadow:2,
                    backgroundColor:"white",
                    overflow:"hidden",
                    transition:"transform 0.2s ease",

                     "&:hover":{transform:"translateY(-5px)"},
                    }}>
                    <CardMedia component="img"
                     height="220"
                     image="/laundry/ironing.jpeg"
                     alt="ironing">
                    </CardMedia>   
                        
                    <CardContent sx={{p:3}}>
                    <Typography variant="h5" fontweight={600}>
                        Ironing
                    </Typography>
                    <Typography sx={{mt:1}}>
                 Crisp,wrinkle-free clothes ready to wear.
                    </Typography>
                    </CardContent>
                 </Card>
                </Box>
        </Box>
        <Box sx={{ py:10,backgroundColor:"#d4cbcbff"}}>
            <Container>
                <Grid 
                containerspacing={6}
                alignItems="center">
                   <Grid size={{xs:12,md:6}}>
                     <Box 
                     component="img"
                     src="/laundry/washing.jpeg"
                     alt="professional laundry care"
                     sx={{width: "100%",
                        height:{xs:"300px",md:"400px"},
                        objectFit:"cover",
                        borderRadius:3,
                        }}/>
                   </Grid>
                   <Grid size={{xs:12,md:6}}>
                        <Typography variant="h2"  sx={{fontweight:700, mb:3}}>
                            Why choose us?
                        </Typography>
                        <Typography sx={{mb:3}}>
                            We take care of your clothes with professional care,careful handling and convenient pickup and delivery.

                        </Typography>
                          <Typography variant="h6"  fontweight={600}>
                            Quality care
                        </Typography>
                        <Typography sx={{mb:2}}>
                            Every garment receives the attention it deserves.

                        </Typography>
                        <Typography variant="h6" fontweight={600}>
                           Pick up & Delivery
                        </Typography>
                        <Typography sx={{mb:2}}>
                           Get your laundry picked up and delivered at your doorstep.  
                        </Typography>
                        <Typography variant="h6"  fontweight={700}>
                           Professional service
                        </Typography>
                        <Typography sx={{mb:2}}>
                           Reliable cleaning and finishing for your everyday clothes.

                        </Typography>
                    </Grid>    
                         
                </Grid>
            </Container>
        </Box>
    <Box sx={{ py: 10, backgroundColor: "#aca1aaff" }}>
     <Container>
        <Typography
        variant="h2"
        align="center"
        sx={{
        fontWeight: 700,
        mb: 6,
        }}
       >
      How It Works
      </Typography>

    <Grid
      container
      spacing={4}
      textAlign="center"
      >
      <Grid size={{ xs: 12, md: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          01
        </Typography>

        <Typography variant="h5" fontWeight={600} sx={{ mt: 2 }}>
          Book a Pickup
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Choose a convenient time and schedule your laundry pickup.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          02
        </Typography>

        <Typography variant="h5" fontWeight={600} sx={{ mt: 2 }}>
          We Clean
        </Typography>

        <Typography sx={{ mt: 1 }}>
          We carefully wash, clean and finish your clothes.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          03
        </Typography>

        <Typography variant="h5" fontWeight={600} sx={{ mt: 2 }}>
          Get Them Back
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Your fresh, clean clothes are delivered back to your doorstep.
        </Typography>
        </Grid>
      </Grid>
     </Container>
    </Box>
    
    <Box
        sx={{
        py: 10,
        px: 2,
        textAlign: "center",
         }}
    >
     <Container>
        <Typography
           variant="h2"
           sx={{
           fontWeight: 700,
           mb: 2,
           }}
        >
          Ready for Fresh Clothes?
        </Typography>

        <Typography
          variant="h6"
          sx={{ mb: 4 }}
        >
         Let us take care of your laundry.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
          px: 5,
          py: 1.5,
          }}
        >
         Book a Pickup
        </Button>
     </Container>
    </Box>
        
    <Box
      sx={{
       backgroundColor: "#1f2937",
       color: "white",
       py: 6,
       mt: 4,
       }}
    >
      <Container>
        <Grid container spacing={4}>
           <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight={700}>
            The Salavai Studio
            </Typography>

            <Typography sx={{ mt: 2 }}>
             Professional laundry, dry cleaning, and ironing services.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight={600}>
            Services
            </Typography>

           <Typography sx={{ mt: 2 }}>
            Washing
           </Typography>

           <Typography>
            Dry Cleaning
           </Typography>

           <Typography>
            Ironing
          </Typography>
         </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
           <Typography variant="h6" fontWeight={600}>
             Contact
           </Typography>

           <Typography sx={{ mt: 2 }}>
             Bangalore, India
           </Typography>

           <Typography>
             hello@thesalavaistudio.com
           </Typography>

           <Typography>
             +91 XXXXX XXXXX
           </Typography>
          </Grid>
        </Grid>

         <Typography
           align="center"
            sx={{
             mt: 5,
             pt: 3,
             borderTop: "1px solid rgba(255,255,255,0.2)",
             }}
         >
           ©  2026 The Salavai Studio. All rights reserved.
         </Typography>
      </Container>
    </Box>
</> 
 );
}
export default Home;