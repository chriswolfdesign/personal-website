import { Box } from "@mui/material";
import experienceData from "../../../../data/ExperienceData.json";
import ExperiencePanel from "../ExperiencePanel";
import { boxStyle } from "./styles";

function ExperiencePane() {
  return (
    <Box id="experience" sx={boxStyle}>
      {experienceData.data.map((item) => (
        <ExperiencePanel data={item} />
      ))}
    </Box>
  );
}

export default ExperiencePane;
