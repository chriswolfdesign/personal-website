import {
  TECH_ITEM_BACKGROUND,
  TEXT_TECH_ITEM,
} from "../../../constants/colors";

export const footerStyle = {
  fontSize: 14,
  padding: 1,
  backgroundColor: TECH_ITEM_BACKGROUND,
  position: "fixed",
  bottom: 0,
  width: "100%",
  visibility: {
    xs: "hidden",
    sm: "visible",
    md: "visible",
    lg: "visible",
    xl: "visible",
  },
};

export const spanStyle = {
  fontWeight: 900,
  color: TEXT_TECH_ITEM,
};
