import { Grid, Box } from "@mui/material";
import { useState } from "react";
import TechnologyList from "../TechnologyList";
import {
  imageStyle,
  gridStyle,
  hoverGridStyle,
  hoverTitleStyle,
  titleStyle,
  summaryStyle,
} from "./styles";

function ProjectPanel(props) {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);
  const openLink = () => window.open(props.data.link).focus();

  return (
    <Grid
      container
      sx={hover ? hoverGridStyle : gridStyle}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={openLink}
    >
      <Grid item xs={12} md={4}>
        <Box
          component="img"
          sx={imageStyle}
          alt="Image here"
          src={props.data.image}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={hover ? hoverTitleStyle : titleStyle}>{props.data.title}</Box>
        <Box sx={summaryStyle}>{props.data.summary}</Box>
        <Box>
          <TechnologyList technologies={props.data.technologies} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProjectPanel;
