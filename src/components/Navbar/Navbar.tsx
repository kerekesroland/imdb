import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../tools/SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import { CustomBox } from "../../tools/CustomBox";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FC } from "react";

const drawerWidth = 240;
const navItems = ["Popular Movies", "Discover Movies", "Discover Tv Shows"];

interface IProps {
  handleSearch?: Function;
}

export const Navbar: FC<IProps> = ({ handleSearch }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const inputRef: any = React.useRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box
        sx={{
          backgroundColor: "#282828",
        }}
      >
        <Link to={"/"}>
          <Typography
            variant="h6"
            sx={{
              my: 2,
              textAlign: "center",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            IMDB
          </Typography>
        </Link>
      </Box>

      <Divider sx={{ bgcolor: "secondary.light" }} />

      <Box
        onClick={handleDrawerToggle}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#282828",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{
                  backgroundColor: "#383838",
                  borderRadius: "15px",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#fff",
                    textAlign: "center",
                  }}
                  primary={item}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#282828", height: "4rem" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4rem",
            }}
          >
            <Link to={"/"} className={styles.link}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    cursor: "pointer",
                    color: "white",
                  },
                }}
              >
                IMDB
              </Typography>
            </Link>
            <Search>
              <SearchIconWrapper
                onClick={(event) => handleSearch?.(event, inputRef)}
              >
                <SearchIcon style={{ cursor: "pointer", zIndex: 999 }} />
              </SearchIconWrapper>
              <StyledInputBase
                onKeyUp={(event) => handleSearch?.(event, inputRef)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                inputRef={inputRef}
              />
            </Search>
          </Box>
          <CustomBox>
            {navItems.map((item) => (
              <div style={{ display: "flex" }} key={item}>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{
                    bgcolor: { sm: "transparent", md: "secondary.light" },
                    borderRightWidth: { md: 2 },
                    height: "2rem",
                  }}
                  flexItem
                />
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    textTransform: "none",
                    letterSpacing: "0.1rem",
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  {item}
                </Button>
              </div>
            ))}
          </CustomBox>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
