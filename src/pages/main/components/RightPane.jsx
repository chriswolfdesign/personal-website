import {Box} from "@mui/material";
import {TEXT_GRAY} from "../../../constants/colors";
import AboutPane from "./AboutPane";

const boxStyles = {
  color: TEXT_GRAY,
  marginRight: 8
}

function RightPane() {
  return (
    <Box sx={boxStyles}>
      <AboutPane />
    </Box>
  )
}

export default RightPane;