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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReactCountryFlag from "react-country-flag";

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
      <Button
        onClick={handleToggleMenu}
        variant="contained"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",

          borderRadius: "24px",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "none",
          },
        }}
      >
        <ReactCountryFlag
          className="emojiFlag"
          countryCode={selectedItem?.countryCode}
          style={{
            fontSize: 16,
            paddingRight: "8px",
          }}
          aria-label={selectedItem?.countryName}
        />
        {selectedItem?.countryName || "Select Item"}
      </Button>
      <Drawer
        anchor="bottom"
        open={isMenuOpen}
        onClose={handleToggleMenu}
        PaperProps={{
          style: { width: "100%", height: "100%", position: "relative" },
        }}
      >
        <IconButton
          onClick={handleToggleMenu}
          color="inherit"
          aria-label="close"
          sx={{ position: "absolute", top: 10, right: 10, zIndex: 5 }}
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2} sx={{ p: 2 }}>
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
                          sx={{ pl: 0, cursor: "pointer" }}
                        >
                          <ReactCountryFlag
                            countryCode={country.countryCode}
                            style={{
                              fontSize: 16,
                            }}
                            aria-label={country.countryName}
                          />
                          <ListItemText sx={{ fontSize: 8, pl: 1 }}>
                            {country.countryName}
                          </ListItemText>
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
