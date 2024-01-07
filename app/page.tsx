import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <h1>NEXT 14 + MUI</h1>
      </Box>
    </Container>
  );
}
