import { styled } from "@mui/material/styles";

export const CustomBox = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
  },
  [theme.breakpoints.down(965)]: {
    display: "none",
  },
}));
