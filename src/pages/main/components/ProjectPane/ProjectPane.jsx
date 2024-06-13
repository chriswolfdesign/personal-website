import { Box } from "@mui/material";
import projectData from "../../../../data/ProjectData.json";
import ProjectPanel from "../ProjectPanel";
import { boxStyle } from "./styles";

function ProjectPane() {
  return (
    <Box id="projects" sx={boxStyle}>
      {projectData.data.map((item) => (
        <ProjectPanel data={item} />
      ))}
    </Box>
  );
}

export default ProjectPane;
