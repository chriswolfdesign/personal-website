import { Box } from "@mui/material";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { boxStyle, linkStyle, hoverBoxStyle } from "./styles";

function Tab(props) {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);
  return (
    <Link style={linkStyle} smooth to={props.link}>
      <Box
        sx={hover ? hoverBoxStyle : boxStyle}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        {props.text}
      </Box>
    </Link>
  );
}

export default Tab;
