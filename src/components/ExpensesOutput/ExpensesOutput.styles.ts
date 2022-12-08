import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: props.backgroundColors.primary100
  }
}))