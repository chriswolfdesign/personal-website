import { Box, Typography } from "@mui/material";
import ProfilePicture from "../ProfilePicture";
import SocialIcons from "../SocialIcons";
import TabLine from "../TabLine";
import { paragraphStyles, boxStyles } from "./styles";

function LeftPane() {
  return (
    <Box sx={boxStyles}>
      <Typography variant="h3">Chris Wolf</Typography>
      <Typography variant="h6">Software Engineer</Typography>
      <p style={paragraphStyles}>
        I build scalable, reliable, extensible software.
      </p>
      <TabLine />
      <ProfilePicture />
      <SocialIcons />
    </Box>
  );
}

export default LeftPane;
