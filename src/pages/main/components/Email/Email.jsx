import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { iconStyle, hoverIconStyle } from "./styles";

function Email() {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);

  return (
    <Box className="Email">
      <a href="mailto:chriswolfdesign@gmail.com">
        <EmailIcon
          className="EmailIcon"
          sx={hover ? hoverIconStyle : iconStyle}
          onMouseEnter={enter}
          onMouseLeave={leave}
        />
      </a>
    </Box>
  );
}

export default Email;
