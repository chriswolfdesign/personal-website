import { Box } from "@mui/material";
import AboutPane from "../AboutPane";
import ExperiencePane from "../ExperiencePane";
import ProjectPane from "../ProjectPane";
import { boxStyles } from "./styles";

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
