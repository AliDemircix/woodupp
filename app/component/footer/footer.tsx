"use client";
import { Grid, List, ListItem, Typography, styled } from "@mui/material";
import { contact, klantenService, overWoodUpp } from "./constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CountriesDrawer from "./CountriesDrawer";
import FooterSection from "./FooterSection";

const StyledGrid = styled(Grid)`
  & .MuiListItem-root {
    padding: 4px 0px 4px 0px;
    font-size: 12px;
  }
`;

function Footer() {
  return (
    <StyledGrid container spacing={3} sx={{ mt: 5, p: 5 }} bgcolor="#F5F5F7">
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">{contact.title}</Typography>
        <List sx={{ padding: 0 }}>
          <ListItem sx={{ fontWeight: "bold" }}>{contact.tel}</ListItem>
          <ListItem sx={{ fontWeight: "bold" }}>{contact.email}</ListItem>
          <ListItem>{contact.openTimes}</ListItem>
          <ListItem>
            <FacebookIcon />
            <InstagramIcon />
          </ListItem>
          <ListItem>
            <CountriesDrawer countries={contact.countries} />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FooterSection section={overWoodUpp} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FooterSection section={klantenService} />
      </Grid>
    </StyledGrid>
  );
}

export default Footer;
