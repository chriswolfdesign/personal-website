import { Box, Grid } from "@mui/material";
import TechnologyList from "../TechnologyList";
import { useState } from "react";

import {
  dateStyle,
  gridStyle,
  hoverGridStyle,
  hoverTitleStyle,
  titleStyle,
  summaryStyle,
} from "./styles.js";

function ExperiencePanel(props) {
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
      <Grid item xs={4}>
        <Box sx={dateStyle}>{props.data.time}</Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={hover ? hoverTitleStyle : titleStyle}>
          {props.data.title} | {props.data.company}
        </Box>
        <Box sx={summaryStyle}>{props.data.summary}</Box>
        <Box>
          <TechnologyList technologies={props.data.technologies} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ExperiencePanel;
