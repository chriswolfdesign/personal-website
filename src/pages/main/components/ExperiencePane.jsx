import {Box} from "@mui/material";
import experienceData from "../../../data/ExperienceData.json";
import ExperiencePanel from "./ExperiencePanel";

const boxStyle = {
  marginTop: 15
}

function ExperiencePane() {
  return (
    <Box sx={boxStyle}>{experienceData.data.map(item => (
      <ExperiencePanel data={item}/>
    ))}</Box>
  )
}

export default ExperiencePane;