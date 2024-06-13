import LeftPane from "../components/LeftPane";
import { Grid } from "@mui/material";
import RightPane from "../components/RightPane";

import { gridStyles } from "./styles";

function MainPage() {
  return (
    <Grid container spacing={1} sx={gridStyles}>
      <Grid item xs>
        <LeftPane />
      </Grid>
      <Grid item xs>
        <RightPane />
      </Grid>
    </Grid>
  );
}

export default MainPage;
