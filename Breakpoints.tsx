import React from "react";

type Props = {};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Breakpoints = (props: Props) => {
  return <div>Breakpoints</div>;
};

export default Breakpoints;
function createTheme(arg0: {
  breakpoints: {
    values: { xs: number; sm: number; md: number; lg: number; xl: number };
  };
}) {
  throw new Error("Function not implemented.");
}
