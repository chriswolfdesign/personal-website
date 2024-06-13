import { Box } from "@mui/material";
import { footerStyle, spanStyle } from "./styles";

function Footer() {
  return (
    <Box sx={footerStyle}>
      This page was built using <span style={spanStyle}>React</span> and{" "}
      <span style={spanStyle}>Material UI</span>
    </Box>
  );
}

export default Footer;
