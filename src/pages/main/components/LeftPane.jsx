import {Box, Typography} from "@mui/material";

const boxStyles = {
  marginTop: 8,
  marginLeft: 8
}

const paragraphStyles = {
  fontSize: 12,
  color: "#c6bebe"
}

function LeftPane() {
  return (
    <Box sx={boxStyles}>
      <Typography variant="h3">Chris Wolf</Typography>
      <Typography variant="h6">Software Engineer</Typography>
      <p style={paragraphStyles}>I build software scalable, reliable, extensible software.</p>
    </Box>
  )
}

export default LeftPane;