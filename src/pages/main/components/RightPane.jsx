import { Box } from "@mui/material";
import { TEXT_GRAY } from "../../../constants/colors";
import AboutPane from "./AboutPane";
import ExperiencePane from "./ExperiencePane";
import ProjectPane from "./ProjectPane";

const boxStyles = {
  color: TEXT_GRAY,
  marginRight: 8,
  height: 600,
  overflowY: "auto",
  scrollbarWidth: "none",
};

function RightPane() {
  return (
    <Box sx={boxStyles}>
      <AboutPane />
      <ExperiencePane />
      <ProjectPane />
    </Box>
  );
}

export default RightPane;

