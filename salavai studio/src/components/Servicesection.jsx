import { Box, Typography } from "@mui/material";

function ServiceSection({
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: reverse ? "row-reverse" : "row",
        },
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "100%", md: "45%" },
          borderRadius: 3,
        }}
      />

      <Box>
        <Typography variant="h4" fontWeight={700}>
          {title}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default ServiceSection;