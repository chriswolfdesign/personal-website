import LeftPane from "./components/LeftPane";
import {Grid} from "@mui/material";

function MainPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <LeftPane/>
      </Grid>
    </Grid>
  )
}

export default MainPage;