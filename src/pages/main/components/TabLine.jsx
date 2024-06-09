import { Grid } from "@mui/material";
import Tab from "./Tab";

const gridStyle = {
  marginTop: 2,
};

function TabLine() {
  return (
    <Grid sx={gridStyle} container spacing={1}>
      <Grid item xs={3}>
        <Tab text="ABOUT" link="/#about" />
      </Grid>
      <Grid item xs={3}>
        <Tab text="EXPERIENCE" link="/#experience" />
      </Grid>
      <Grid item xs={3}>
        <Tab text="PROJECTS" link="/#projects" />
      </Grid>
    </Grid>
  );
}

export default TabLine;
