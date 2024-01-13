"use client";
import React, { useState } from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Country {
  countryCode: string;
  countryName: string;
  region: string;
}

interface Countries {
  countries: Country[];
}

const CountriesDrawer = ({ countries }: Countries) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Country>(countries[0]);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (country: Country) => {
    setSelectedItem(country);
    setMenuOpen(false);
  };

  return (
    <>
      <Button onClick={handleToggleMenu} variant="outlined" color="primary">
        {selectedItem?.countryName || "Select Item"}
      </Button>
      <Drawer
        anchor="bottom"
        open={isMenuOpen}
        onClose={handleToggleMenu}
        PaperProps={{ style: { width: "100%", height: "100%" } }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <IconButton
            onClick={handleToggleMenu}
            color="inherit"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid container spacing={2}>
          {Array.from(new Set(countries.map((country) => country.region))).map(
            (region) => (
              <Grid item xs={12} sm={6} md={4} key={region}>
                <List>
                  <Typography variant="h6">{region}</Typography>
                  {countries.map(
                    (country) =>
                      country.region === region && (
                        <ListItem
                          onClick={() => handleMenuItemClick(country)}
                          key={country.countryCode}
                        >
                          <ListItemText>{country.countryName}</ListItemText>
                        </ListItem>
                      )
                  )}
                </List>
              </Grid>
            )
          )}
        </Grid>
      </Drawer>
    </>
  );
};

export default CountriesDrawer;
