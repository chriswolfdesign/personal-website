import { Box, Typography } from "@mui/material";
import { TEXT_GRAY } from "../../../constants/colors";
import TabLine from "./TabLine";

const paragraphStyles = {
  fontSize: 12,
  color: TEXT_GRAY,
};

const boxStyles = {
  marginLeft: 12,
};

function LeftPane() {
  return (
    <Box sx={boxStyles}>
      <Typography variant="h3">Chris Wolf</Typography>
      <Typography variant="h6">Software Engineer</Typography>
      <p style={paragraphStyles}>
        I build scalable, reliable, extensible software.
      </p>
      <TabLine />
    </Box>
  );
}

export default LeftPane;

