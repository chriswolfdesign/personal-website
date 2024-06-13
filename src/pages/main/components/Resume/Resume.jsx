import { Box } from "@mui/material";
import { useState } from "react";
import { boxStyle, hoverBoxStyle } from "./styles";

function Resume() {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);
  const openResume = () => window.open("/WOLFResume.pdf").focus();

  return (
    <Box
      sx={hover ? hoverBoxStyle : boxStyle}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={openResume}
    >
      Click here for more information on my education and experience.
    </Box>
  );
}

export default Resume;
