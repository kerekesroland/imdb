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
import { Search, SearchIconWrapper, StyledInputBase } from "../SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import { CustomBox } from "../CustomBox";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FC } from "react";
import { customStyles } from "./Navbar.custom";

const navItems = ["Popular Movies"];

interface IProps {
  handleSearch?: Function;
  handleSetPopular?: Function;
  searchable: boolean;
}

export const Navbar: FC<IProps> = ({
  handleSearch,
  handleSetPopular,
  searchable,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const inputRef: any = React.useRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Box sx={customStyles.drawerContainer}>
        <Link to={"/"}>
          <Typography variant="h6" sx={customStyles.drawerTitle}>
            IMDB
          </Typography>
        </Link>
      </Box>

      <Divider sx={customStyles.drawerDivider} />

      <Box onClick={handleDrawerToggle} sx={customStyles.drawerNavContainer}>
        <List sx={customStyles.drawerNavList}>
          {navItems.map((item) => (
            <Link key={item} to={"/"} className={styles.drawer_link}>
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={customStyles.navItemButton}
                  onClick={() => handleSetPopular?.()}
                >
                  <ListItemText
                    primary={item}
                    sx={customStyles.navItemButtonText}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <Box sx={customStyles.mainContainer}>
      <AppBar component="nav" sx={customStyles.appBar}>
        <Toolbar sx={customStyles.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={customStyles.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={customStyles.leftNav}>
            <Link to={"/"} className={styles.link}>
              <Typography
                variant="h6"
                component="div"
                sx={customStyles.logoTitle}
              >
                IMDB
              </Typography>
            </Link>
            {searchable && (
              <Search>
                <SearchIconWrapper
                  onClick={(event) => handleSearch?.(event, inputRef)}
                >
                  <SearchIcon style={customStyles.searchIcon} />
                </SearchIconWrapper>
                <StyledInputBase
                  onKeyUp={(event) => handleSearch?.(event, inputRef)}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  inputRef={inputRef}
                />
              </Search>
            )}
          </Box>
          <CustomBox>
            {navItems.map((item) => (
              <div style={customStyles.navContainer} key={item}>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={customStyles.divider}
                  flexItem
                />
                <Link
                  key={item}
                  to={"/"}
                  onClick={() => handleSetPopular?.()}
                  className={styles.drawer_link}
                >
                  <Button key={item} sx={customStyles.navButton}>
                    {item}
                  </Button>
                </Link>
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
            keepMounted: true,
          }}
          sx={customStyles.drawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
