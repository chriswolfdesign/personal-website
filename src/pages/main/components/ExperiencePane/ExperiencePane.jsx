import { Box } from "@mui/material";
import experienceData from "../../../../data/ExperienceData.json";
import ExperiencePanel from "../ExperiencePanel";
import Resume from "../Resume";
import { boxStyle } from "./styles";

function ExperiencePane() {
  return (
    <Box id="experience" sx={boxStyle}>
      {experienceData.data.map((item) => (
        <ExperiencePanel key={item.title} data={item} />
      ))}
      <Resume />
    </Box>
  );
}

export default ExperiencePane;
