import { Grid } from "@mui/material";
import Email from "./Email";
import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";

const gridStyle = {
  marginTop: 2,
};

function SocialIcons() {
  return (
    <Grid sx={gridStyle} container spacing={1}>
      <Grid item xs={1}>
        <GitHub />
      </Grid>
      <Grid item xs={1}>
        <LinkedIn />
      </Grid>
      <Grid item xs={1}>
        <Email />
      </Grid>
    </Grid>
  );
}

export default SocialIcons;
