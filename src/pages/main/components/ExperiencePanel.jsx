import {Box, Grid} from "@mui/material";
import {BORDER_COLOR, TECH_ITEM_BACKGROUND, TEXT_TECH_ITEM, TEXT_WHITE} from "../../../constants/colors";
import TechnologyList from "./TechnologyList";
import {useState} from "react";

const dateStyle = {
  fontSize: 12
}

const gridStyle = {
  textAlign: "left",
  marginBottom: 3,
  padding: 1
}

const hoverGridStyle = {
  textAlign: "left",
  marginBottom: 3,
  cursor: "pointer",
  backgroundColor: TECH_ITEM_BACKGROUND,
  border: "2px solid " + BORDER_COLOR,
  borderRadius: 5,
  padding: 1
}

const hoverTitleStyle = {
  color: TEXT_TECH_ITEM,
  fontSize: 12
}

const titleStyle = {
  color: TEXT_WHITE,
  fontSize: 12
}

const summaryStyle = {
  marginTop: 1,
  fontSize: 11
}

function ExperiencePanel(props) {
  const [hover, setHover] = useState(false);
  const enter = () => setHover(true);
  const leave = () => setHover(false);
  const openLink = () => window.open(props.data.link).focus();

  return (
    <Grid container sx={hover ? hoverGridStyle : gridStyle} onMouseEnter={enter} onMouseLeave={leave} onClick={openLink}>
      <Grid item xs={4}>
        <Box sx={dateStyle}>{props.data.time}</Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={hover? hoverTitleStyle : titleStyle}>{props.data.title} | {props.data.company}</Box>
        <Box sx={summaryStyle}>{props.data.summary}</Box>
        <Box><TechnologyList technologies={props.data.technologies}/></Box>
      </Grid>
    </Grid>
  )
}

export default ExperiencePanel;