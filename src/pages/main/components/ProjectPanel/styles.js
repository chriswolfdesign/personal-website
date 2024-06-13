import {
  BORDER_COLOR,
  TECH_ITEM_BACKGROUND,
  TEXT_TECH_ITEM,
  TEXT_WHITE,
} from "../../../../constants/colors";

export const imageStyle = {
  height: {
    xs: 0,
    sm: 0,
    md: 75,
    lg: 75,
    xl: 75,
  },
  width: 75,
  borderRadius: "5%",
  visibility: {
    xs: "hidden",
    sm: "hidden",
    md: "visible",
    lg: "visible",
    xl: "visible",
  },
};

export const gridStyle = {
  marginBottom: 3,
  textAlign: "left",
  padding: 1,
};

export const hoverGridStyle = {
  textAlign: "left",
  marginBottom: 3,
  cursor: "pointer",
  backgroundColor: TECH_ITEM_BACKGROUND,
  border: "2px solid " + BORDER_COLOR,
  borderRadius: 5,
  padding: 1,
};

export const hoverTitleStyle = {
  color: TEXT_TECH_ITEM,
  fontSize: 12,
};

export const titleStyle = {
  color: TEXT_WHITE,
  fontSize: 11,
};

export const summaryStyle = {
  marginTop: 1,
  fontSize: 11,
};
