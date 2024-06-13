import { Box } from "@mui/system";
import { imageStyle } from "./styles";

function ProfilePicture() {
  return (
    <Box
      component="img"
      sx={imageStyle}
      alt="Image here"
      src="ProfilePicture.jpeg"
    />
  );
}

export default ProfilePicture;
