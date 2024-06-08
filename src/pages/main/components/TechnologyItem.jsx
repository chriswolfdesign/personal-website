import {BORDER_COLOR, TECH_ITEM_BACKGROUND, TEXT_TECH_ITEM} from "../../../constants/colors";

const boxStyle = {
  fontSize: 10,
  marginTop: 1,
  backgroundColor: TECH_ITEM_BACKGROUND,
  padding: 2,
  borderRadius: 5,
  textAlign: "center",
  opacity: 0.9,
  border: "2px solid " + BORDER_COLOR,
  color: TEXT_TECH_ITEM
}

function TechnologyItem(props) {
  return <div style={boxStyle}>{props.tech}</div>
}

export default TechnologyItem;