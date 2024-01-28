"use client";
import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextureIcon from "@mui/icons-material/Texture";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => ({
  menu1buttons: {
    textTransform: "none",
    display: "flex",
    justifyContent: "flex-start",
    padding: "8px 16px",
    gap: 8,
    letterSpacing: 0.5,
    fontWeight: 700,
    color: "#000000",
    "&:hover": { background: "white" },
  },
  menu1buttonsMobile: {
    textTransform: "none",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    padding: "8px 32px",
    letterSpacing: 0.5,
    margin: 0,
    fontWeight: 700,
    color: "#000000",
    "&:hover": { background: "white" },
  },
  vertical: {
    transition: "all 500ms",
    transform: "scaleY(1)",
    transformOrigin: "50% 50%",
  },
  transform: {
    transform: "scaleY(0)",
    transition: "all 500ms",
    transformOrigin: "50% 50%",
  },
  menu2: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minWidth: 370,
    margin: 0,
    "&hover": {
      cursor: "pointer",
    },
  },
  menu2Mobile: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: "0 16px",

    "&hover": {
      cursor: "pointer",
    },
  },
  menu3: {
    width: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    cursor: "pointer",
  },
  accordion: {
    border: "none", // Remove the border
    margin: 0, // Add the margin at the bottom
    boxShadow: "none", // Remove the box shadow
    "&:not(:last-child)": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)", // Add border between panels
    },
    "&:before": {
      display: "none", // Hide the default border between panels
    },
  },
  accordionSummary: {
    marginBottom: -1, // Adjust margin to compensate for border
    margin: 0,
  },
}));

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const initialMenu1Open = {
    Akupanelen: false,
    Inspiratie: false,
    Samples: false,
    "Offerte Opvragen": false,
    Klantenservice: false,
  };
  const [isMenu1Open, setIsMenu1Open] = React.useState<{
    [key: string]: boolean;
  }>(initialMenu1Open);

  const openOption = Object.keys(isMenu1Open).find((key) => isMenu1Open[key]);

  const [hoveredElementId, setHoveredElementId] = useState<number | undefined>(
    undefined
  );

  const handleClose = () => setOpen(false);
  const isBigScreen = useMediaQuery("(min-width: 1500px)");
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <Box
      sx={{
        boxShadow: "0 4px 2px -2px gray",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <AppBar
        position="sticky"
        color={"transparent"}
        style={{
          maxWidth: 1440,
          margin: "auto",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            disableRipple
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: "flex",
              gap: 1,
              "&:hover": {
                borderRadius: 10,
                background: "#E8E8E8",
              },
            }}
            onClick={() => {
              setOpen(!open), setIsMenu1Open(initialMenu1Open);
            }}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <Typography
              variant="h6"
              fontWeight={400}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Menu
            </Typography>
          </IconButton>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            style={{
              position: "absolute",
              top: 100,
              left: 0,
              margin: 0,
              padding: 0,
            }}
            hideBackdrop={true}
            PaperProps={{
              style: {
                backgroundColor: "white",
                boxShadow: "none",
              },
            }}
          >
            {isMobile ? (
              <div>
                <MenuMobile
                  open={isMenu1Open}
                  setOpen={setOpen}
                  setIsMenu1Open={setIsMenu1Open}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  padding: isBigScreen ? "3rem 0" : 64,
                  width: "100%",
                  maxWidth: 1440,
                  marginTop: 32,
                  marginLeft: isBigScreen ? "auto" : "0",
                  marginRight: isBigScreen ? "auto" : "0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: isBigScreen ? 140 : 64,
                    minWidth: "100%",
                  }}
                >
                  <Menu1
                    open={isMenu1Open}
                    setIsMenu1Open={setIsMenu1Open}
                    setOpen={setOpen}
                  />
                  <div style={{ display: "flex", gap: 0 }}>
                    {openOption && (
                      <Menu2
                        setOpen={setOpen}
                        option={options.find(
                          (option) => option.name === openOption
                        )}
                        open={isMenu1Open}
                        setIsHovered={setHoveredElementId}
                      />
                    )}

                    <Menu3
                      subMenuId={hoveredElementId}
                      setIsHovered={setHoveredElementId}
                    />
                  </div>
                </div>
              </div>
            )}
          </Dialog>
          <Link href="/">
            <Typography variant="h4">ECD Wall Panel</Typography>
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: "flex", gap: 1, "&:hover": { borderRadius: 10 } }}
          >
            <TextureIcon fontSize="small" />
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              Kleurstellen
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

type SubMenu = {
  name: string;
  id: number;
  link: string;
  img: string;
  text: string;
};
type Option = {
  name: string;
  id: number;
  submenus?: {
    name: string;
    id: number;
    mainColorName?: string;
    link: string;
    img: string;
  }[];
};

type Menu1Props = {
  open: Record<string, boolean>;
  setOpen: (value: boolean) => void;
  setIsMenu1Open: Dispatch<SetStateAction<Record<string, boolean>>>;
};

const Menu1 = (props: Menu1Props) => {
  const { open, setIsMenu1Open } = props;
  const classes = useStyles();
  const handleButtonClick = (optionName: string) => {
    setIsMenu1Open((prevOpen) => ({
      ...Object.fromEntries(
        Object.entries(prevOpen).map(([key]) => [key, false])
      ),
      [optionName]: !prevOpen[optionName],
    }));
  };

  return (
    <div>
      {options.map((option) => (
        <Grid container key={option.id} direction="column" mb={2}>
          <Button
            className={classes.menu1buttons}
            onClick={() => handleButtonClick(option.name)}
            disableRipple
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"40"}
              height={"40"}
              viewBox="0 0 160 160"
              className={classes.vertical}
            >
              <rect
                x="70"
                width="20"
                height="160"
                className={
                  open[option.name as string]
                    ? classes.transform
                    : classes.vertical
                }
              />
              <rect y="70" width="160" height="20" />
            </svg>
            <Typography variant={"h4"}>{option.name}</Typography>
          </Button>
        </Grid>
      ))}
    </div>
  );
};

const MenuMobile = (props: Menu1Props) => {
  const { open, setIsMenu1Open, setOpen } = props;
  const classes = useStyles();
  const handleButtonClick = (optionName: string) => {
    setIsMenu1Open((prevOpen) => ({
      ...Object.fromEntries(
        Object.entries(prevOpen).map(([key]) => [key, false])
      ),
      [optionName]: !prevOpen[optionName],
    }));
  };

  return (
    <div>
      {options.map((option) => (
        <Accordion className={classes.accordion}>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            className={classes.accordionSummary}
            //classes={{ expanded: classes.accordionSummary }}
          >
            <Grid container key={option.id} direction="column">
              <Button
                className={classes.menu1buttonsMobile}
                onClick={() => handleButtonClick(option.name)}
                disableRipple
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={"20"}
                  height={"20"}
                  viewBox="0 0 160 160"
                  className={classes.vertical}
                >
                  <rect
                    x="70"
                    width="20"
                    height="160"
                    className={
                      open[option.name as string]
                        ? classes.transform
                        : classes.vertical
                    }
                  />
                  <rect y="70" width="160" height="20" />
                </svg>
                <Typography variant={"h5"}>{option.name}</Typography>
              </Button>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Menu2Mobile
              setOpen={setOpen}
              open={open}
              option={options.find((option) => option.name === option.name)}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

type Menu2Props = {
  option: Option | undefined;
  open: Record<string, boolean>;
  setIsHovered: Dispatch<SetStateAction<number | undefined>>;
  setOpen: (a: boolean) => void;
};

type Menu2MobileProps = {
  option: Option | undefined;
  open: Record<string, boolean>;
  setOpen: (a: boolean) => void;
};

const Menu2 = (props: Menu2Props) => {
  const classes = useStyles();
  const { option, setOpen, setIsHovered } = props;

  const handleMouseEnter = (elementId: number | undefined) => {
    setIsHovered(elementId);
  };

  const handleMouseLeave = () => {
    setIsHovered(undefined);
  };

  return (
    <div className={classes.menu2}>
      {option?.submenus?.map((submenu) => (
        <div
          key={submenu.id}
          onMouseEnter={() => handleMouseEnter(submenu.id)}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link
            className={classes.menu1buttons}
            href={
              submenu.id === 1 || submenu.id === 2
                ? `/${submenu.link}?color=${submenu.mainColorName}`
                : `/${submenu.link}`
            }
          >
            <Typography
              variant="h6"
              fontWeight={400}
              noWrap
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {submenu.name}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  );
};

const Menu2Mobile = (props: Menu2MobileProps) => {
  const classes = useStyles();
  const { option, setOpen, open } = props;

  return (
    <div className={classes.menu2Mobile}>
      {option?.submenus?.map((submenu) => (
        <div
          key={submenu.id}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link
            className={classes.menu1buttons}
            href={
              submenu.id === 1 || submenu.id === 2
                ? `/${submenu.link}?color=${submenu.mainColorName}`
                : `/${submenu.link}`
            }
          >
            <Typography
              variant="body1"
              fontWeight={400}
              noWrap
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {submenu.name}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  );
};

type Menu3Props = {
  subMenuId: number | undefined;
  setIsHovered: Dispatch<SetStateAction<number | undefined>>;
};

const Menu3 = (props: Menu3Props) => {
  const { subMenuId, setIsHovered } = props;
  const handleMouseEnter = (elementId: number | undefined) => {
    setIsHovered(elementId);
  };

  const handleMouseLeave = () => {
    setIsHovered(undefined);
  };

  const classes = useStyles();
  const findSubmenuById = (
    submenuId: number | undefined
  ): SubMenu | undefined => {
    for (const option of options) {
      const foundSubmenu = option.submenus.find(
        (submenu) => submenu.id === submenuId
      );
      if (foundSubmenu) {
        return foundSubmenu;
      }
    }
    return undefined; // Return undefined if no submenu is found
  };
  const subMenu = findSubmenuById(subMenuId);
  return (
    <>
      {subMenuId && (
        <div
          className={classes.menu3}
          onMouseEnter={() => handleMouseEnter(subMenuId)}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={subMenu?.img || "/default.jpg"}
            alt={subMenu?.name || "/default"}
            width={450}
            height={450}
          />
          <Typography variant="h6">{subMenu?.name}</Typography>
          <Typography variant="body1">{subMenu?.text}</Typography>
        </div>
      )}
    </>
  );
};

const options = [
  {
    name: "Akupanelen",
    id: 1,
    submenus: [
      {
        name: "Akupanel 240*60",
        link: "product/akupanel-240",
        mainColorName: "copper-oxide",
        id: 1,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Akupanel 300*60",
        link: "product/akupanel-300",
        mainColorName: "grey-oxide",
        id: 2,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Eindlaat",
        link: "eindlaat",
        id: 3,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Kleurstalen",
        link: "kleurstalen",
        id: 4,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
    ],
  },
  {
    name: "Inspiratie",
    id: 2,
    submenus: [
      {
        name: "Woonkamer",
        link: "wonkamer",
        id: 5,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Keuken",
        link: "keuken",
        id: 6,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Slaapkamer",
        link: "slaapkamer",
        id: 7,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Kantoor",
        link: "kantoor",
        id: 8,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Gang/Hal",
        link: "gang-hal",
        id: 9,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
    ],
  },
  {
    name: "Samples",
    id: 3,
    submenus: [
      {
        name: "Samples",
        link: "samples",
        id: 10,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
    ],
  },
  {
    name: "Offerte Opvragen",
    id: 4,
    submenus: [
      {
        name: "Offerte Opvragen",
        link: "offerte-opvragen",
        id: 11,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
    ],
  },
  {
    name: "Klantenservice",
    id: 5,
    submenus: [
      {
        name: "Contact",
        link: "contact",
        id: 12,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Montage",
        link: "customer/montage",
        id: 13,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Vaakgestelde vragen en antwoorden",
        link: "customer/vaakgestelde-vragen-en-antworden",
        id: 14,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
    ],
  },
];
