import { Box } from "@mui/system";
import { TEXT_TECH_ITEM } from "../../../constants/colors";

const imageStyle = {
  marginTop: 5,
  height: 300,
  width: 300,
  borderRadius: "50%",
  border: "4px solid " + TEXT_TECH_ITEM,
};

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
