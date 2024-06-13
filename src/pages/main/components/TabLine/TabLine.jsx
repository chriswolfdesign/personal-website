import { Grid } from "@mui/material";
import Tab from "../Tab";

function TabLine() {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Tab text="ABOUT" link="/#about" />
      </Grid>
      <Grid item>
        <Tab text="EXPERIENCE" link="/#experience" />
      </Grid>
      <Grid item>
        <Tab text="PROJECTS" link="/#projects" />
      </Grid>
    </Grid>
  );
}

export default TabLine;
