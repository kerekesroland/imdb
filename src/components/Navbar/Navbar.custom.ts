export const customStyles = {
  mainContainer: {
    display: "flex",
  },
  leftNav: {
    display: "flex",
    alignItems: "center",
    gap: "4rem",
  },
  navContainer: {
    display: "flex",
  },
  navButton: {
    color: "#fff",
    textTransform: "none",
    letterSpacing: "0.1rem",
    fontWeight: 500,
    fontSize: "1rem",
  },
  logoTitle: {
    flexGrow: 1,
    display: {
      xs: "none",
      sm: "none",
      md: "block",
      cursor: "pointer",
      color: "white",
    },
  },
  searchIcon: {
    cursor: "pointer",
    zIndex: 999,
  },
  appBar: {
    backgroundColor: "#282828",
    height: "4rem",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    mr: 2,
    display: { md: "none" },
  },
  divider: {
    bgcolor: { sm: "transparent", md: "secondary.light" },
    borderRightWidth: { md: 2 },
    height: "2rem",
  },
  drawerContainer: {
    backgroundColor: "#282828",
  },
  drawer: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 240,
    },
  },
  drawerTitle: {
    my: 2,
    textAlign: "center",
    color: "#fff",
    cursor: "pointer",
  },
  drawerDivider: {
    bgcolor: "secondary.light",
  },
  drawerNavContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#282828",
  },
  drawerNavList: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem",
    alignItems: "center",
  },
  navItemButton: {
    backgroundColor: "rgb(26,25,43)",
    borderRadius: "15px",
  },
  navItemButtonText: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
};
