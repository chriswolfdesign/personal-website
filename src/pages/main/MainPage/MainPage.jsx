import LeftPane from "../components/LeftPane";
import { Box, Grid } from "@mui/material";
import RightPane from "../components/RightPane";
import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";

import { gridStyles } from "./styles";

function MainPage() {
  return (
    <Box>
      <Header />
      <Grid container spacing={1} sx={gridStyles}>
        <Grid item xs>
          <LeftPane />
        </Grid>
        <Grid item xs>
          <RightPane />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default MainPage;
