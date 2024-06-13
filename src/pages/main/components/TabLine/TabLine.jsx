import { Grid } from "@mui/material";
import Tab from "../Tab";
import { gridStyle } from "./styles";

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
