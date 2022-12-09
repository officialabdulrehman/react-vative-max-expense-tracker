import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    backgroundColor: props.backgroundColors.primary100,
    // borderRadius: 10,

  }
}))