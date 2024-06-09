import { Grid } from "@mui/material";
import Tab from "./Tab";

function TabLine() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Tab text="ABOUT" link="/#about" />
      </Grid>
      <Grid item xs={2}>
        <Tab text="EXPERIENCE" link="/#experience" />
      </Grid>
      <Grid item xs={2}>
        <Tab text="PROJECTS" link="/#projects" />
      </Grid>
    </Grid>
  );
}

export default TabLine;
