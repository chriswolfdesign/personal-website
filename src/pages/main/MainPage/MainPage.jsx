import LeftPane from "../components/LeftPane";
import { Grid } from "@mui/material";
import RightPane from "../components/RightPane";

import { gridStyles } from "./styles";

function MainPage() {
  return (
    <Grid sx={gridStyles} container spacing={2}>
      <Grid item xs={6}>
        <LeftPane />
      </Grid>
      <Grid item xs={6}>
        <RightPane />
      </Grid>
    </Grid>
  );
}

export default MainPage;
