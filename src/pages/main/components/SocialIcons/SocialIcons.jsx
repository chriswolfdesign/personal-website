import { Grid } from "@mui/material";
import Email from "../Email";
import GitHub from "../GitHub";
import LinkedIn from "../LinkedIn";
import { gridStyle } from "./styles";

function SocialIcons() {
  return (
    <Grid sx={gridStyle} container spacing={1}>
      <Grid item>
        <GitHub />
      </Grid>
      <Grid item>
        <LinkedIn />
      </Grid>
      <Grid item>
        <Email />
      </Grid>
    </Grid>
  );
}

export default SocialIcons;
