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
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material/styles";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

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
    width: 370,
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

  const [hoveredElementId, setHoveredElementId] = useState<
    number | undefined | null
  >(null);

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <AppBar position="sticky" color={"transparent"}>
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
              top: 64,
              left: 0,
              margin: 0,
              padding: 0,
            }}
            hideBackdrop={true}
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
          >
            <div style={{ display: "flex", padding: 64, gap: "32px" }}>
              <Menu1 open={isMenu1Open} setIsMenu1Open={setIsMenu1Open} />
              {openOption && (
                <Menu2
                  option={options.find((option) => option.name === openOption)}
                  open={isMenu1Open}
                  setIsHovered={setHoveredElementId}
                />
              )}
              {hoveredElementId && <Menu3 subMenuId={hoveredElementId} />}
            </div>
          </Dialog>
          <h2>ECD Wall Panel</h2>
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

const options = [
  {
    name: "Akupanelen",
    id: 1,
    submenus: [
      {
        name: "Akupanel 240*60",
        id: 1,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Akupanel 300*60",
        id: 2,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Eindlaat",
        id: 3,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Kleurstalen",
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
        id: 5,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Keuken",
        id: 6,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Slaapkamer",
        id: 7,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Kantoor",
        id: 8,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Gang/Hal",
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
        id: 12,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Montage",
        id: 13,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
      {
        name: "Vaakgestelde vragen en antwoorden",
        id: 14,
        img: "/example.jpg",
        text: "Ervaar de subtiele elegantie van Akupanel | 300, perfect geschikt voor ruime en open omgevingen. Dit 3-meter lange paneel verbetert zowel de akoestiek als de esthetiek in kamers met hoge plafonds, en belichaamt de essentie van Scandinavisch design.",
      },
    ],
  },
];

type SubMenu = { name: string; id: number; img: string; text: string };
type Option = {
  name: string;
  id: number;
  submenus?: { name: string; id: number; img: string }[];
};

type Menu1Props = {
  open: Record<string, boolean>;
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
              width="40"
              height="40"
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
            <Typography variant="h4">{option.name}</Typography>
          </Button>
        </Grid>
      ))}
    </div>
  );
};

type Menu2Props = {
  option: Option | undefined;
  open: Record<string, boolean>;
  setIsHovered: Dispatch<SetStateAction<number | null | undefined>>;
};

const Menu2 = (props: Menu2Props) => {
  const classes = useStyles();
  const { option, open, setIsHovered } = props;

  const handleMouseEnter = (elementId: number | undefined) => {
    setIsHovered(elementId);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className={classes.menu2}>
      {option?.submenus?.map((submenu) => (
        <div
          key={submenu.id}
          onMouseEnter={() => handleMouseEnter(submenu.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Button className={classes.menu1buttons}>
            <Typography
              variant="h6"
              fontWeight={400}
              noWrap
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {submenu.name}
            </Typography>
          </Button>
        </div>
      ))}
    </div>
  );
};

type Menu3Props = {
  subMenuId: number;
};

const Menu3 = (props: Menu3Props) => {
  const { subMenuId } = props;

  const classes = useStyles();
  const findSubmenuById = (submenuId: number): SubMenu | undefined => {
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
    <div
      style={{
        width: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
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
  );
};
