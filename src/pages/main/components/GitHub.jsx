import { Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
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
