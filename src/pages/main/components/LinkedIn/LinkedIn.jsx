import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import { iconStyle, hoverIconStyle } from "./styles";

const link = "https://linkedin.com/in/chriswolftech";

function LinkedIn() {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);
  const openLink = () => window.open(link).focus();

  return (
    <Box>
      <LinkedInIcon
        sx={hover ? hoverIconStyle : iconStyle}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onClick={openLink}
      />
    </Box>
  );
}

export default LinkedIn;
