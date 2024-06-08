import {Box} from "@mui/material";

const boxStyle = {
  fontSize: 14
}

function AboutPane() {
  return (
    <Box sx={boxStyle}>
      <p>
        During my first career, I found myself coming home and coding for fun.  After a few years, I bit the bullet
        and went back to school to become a Software Engineer.  During this process, I discovered a love for problem
        solving and building applications.
      </p>
      <p>
        For the majority of my career, I have enjoyed solving many problems, primarily in the Backend space.  My current
        work has me primarily using Golang, Python, and Kubernetes.  During my personal study time I enjoy working with many
        technologies including React, Rust, and JavaScript.
      </p>
      <p>
        In my (rare) free time, I am likely playing with my dogs, watching movies with my wife, of writing music.
      </p>
    </Box>
  )
}

export default AboutPane;