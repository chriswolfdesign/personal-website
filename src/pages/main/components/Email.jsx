import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import { TEXT_GRAY, TEXT_TECH_ITEM } from "../../../constants/colors";
import { useState } from "react";

const iconStyle = {
  color: TEXT_GRAY,
  fontSize: 24,
};

const hoverIconStyle = {
  color: TEXT_TECH_ITEM,
  cursor: "pointer",
  fontSize: 28,
};

function Email() {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);

  return (
    <Box>
      <a href="mailto:chriswolfdesign@gmail.com">
        <EmailIcon
          sx={hover ? hoverIconStyle : iconStyle}
          onMouseEnter={enter}
          onMouseLeave={leave}
        />
      </a>
    </Box>
  );
}

export default Email;
