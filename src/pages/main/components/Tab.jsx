import { Box } from "@mui/material";
import { useState } from "react";
import { TEXT_GRAY, TEXT_TECH_ITEM } from "../../../constants/colors";
import { HashLink as Link } from "react-router-hash-link";

const boxStyle = {
  color: TEXT_GRAY,
};

const linkStyle = {
  textDecoration: "none",
};

const hoverBoxStyle = {
  color: TEXT_TECH_ITEM,
  cursor: "pointer",
  textDecoration: "underline",
};

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
