import {Grid} from "@mui/material";
import TechnologyItem from "./TechnologyItem";

const gridStyles = {
  marginTop: 0.25
}

function TechnologyList(props) {
  return (
    <Grid sx={gridStyles} container spacing={1}>
      {props.technologies.map(item => (
        <Grid item xs={3}>
          <TechnologyItem tech={item}/>
        </Grid>
      ))}

    </Grid>
  )

}

export default TechnologyList;