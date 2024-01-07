"use client";
import { Grid, List, ListItem, Typography, styled } from "@mui/material";
import Link from "next/link";
import { contact, klantenService, overWoodUpp } from "./constants";

const StyledList = styled(List)`
  & .MuiListItem-root {
    padding-left: 0;
    padding-right: 0;
  }
`;

function Footer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4">{contact.title}</Typography>
        <StyledList sx={{ padding: 0 }}>
          <ListItem>{contact.tel}</ListItem>
          <ListItem>{contact.openTimes}</ListItem>
          <ListItem>icons</ListItem>
        </StyledList>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4">{overWoodUpp.title}</Typography>
        <StyledList>
          {overWoodUpp.links.map((item: { link: string; title: string }) => (
            <ListItem>
              <Link href={item.link}>{item.title}</Link>
            </ListItem>
          ))}
        </StyledList>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="h4">{klantenService.title}</Typography>
        <StyledList>
          {klantenService.links.map((item: { link: string; title: string }) => (
            <ListItem>
              <Link href={item.link}>{item.title}</Link>
            </ListItem>
          ))}
        </StyledList>
      </Grid>
    </Grid>
  );
}

export default Footer;
