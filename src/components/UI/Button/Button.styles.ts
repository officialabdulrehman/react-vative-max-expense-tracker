import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: props.backgroundColors.primary100,
    alignItems: "center"
  },
  flat: {
    backgroundColor: "trasparent"
  },
  text: {
    color: props.colors.primary400
  },
  flatText: {
    color: props.colors.primary200
  },
  pressed: {
    // backgroundColor: props.colors.primary400,
    // color: props.backgroundColors.primary000
    opacity: 0.75,
    borderRadius: 6,
    backgroundColor: props.backgroundColors.primary100,
  },
  pressedFlat: {
    opacity: 0.75,
    backgroundColor: props.backgroundColors.primary100,
    borderRadius: 6,
  }
}))