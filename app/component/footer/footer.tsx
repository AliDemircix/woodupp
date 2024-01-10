"use client";
import { Grid, List, ListItem, Typography, styled } from "@mui/material";
import Link from "next/link";
import { contact, klantenService, overWoodUpp } from "./constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterSection from "./FooterSection";

const StyledGrid = styled(Grid)`
  & .MuiListItem-root {
    padding-left: 0;
    padding-right: 0;
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <StyledGrid container spacing={2} mt={5}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6">{contact.title}</Typography>
        <List sx={{ padding: 0 }}>
          <ListItem>{contact.tel}</ListItem>
          <ListItem>{contact.openTimes}</ListItem>
          <ListItem>
            <FacebookIcon />
            <InstagramIcon />
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
