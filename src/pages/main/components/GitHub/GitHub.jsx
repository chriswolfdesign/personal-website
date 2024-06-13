import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

import { iconStyle, hoverIconStyle } from "./styles";

const link = "https://github.com/chriswolfdesign";

function GitHub() {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);
  const openLink = () => window.open(link).focus();

  return (
    <Box>
      <GitHubIcon
        sx={hover ? hoverIconStyle : iconStyle}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onClick={openLink}
      />
    </Box>
  );
}

export default GitHub;
