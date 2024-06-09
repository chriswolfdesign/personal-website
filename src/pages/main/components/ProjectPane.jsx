import { Box } from "@mui/material";
import projectData from "../../../data/ProjectData.json";
import ProjectPanel from "./ProjectPanel";

const boxStyle = {
  marginTop: 10,
};

function ProjectPane() {
  return (
    <Box sx={boxStyle}>
      {projectData.data.map((item) => (
        <ProjectPanel data={item} />
      ))}
    </Box>
  );
}

export default ProjectPane;

