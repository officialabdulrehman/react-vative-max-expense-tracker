import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {

  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: props.colors.primary600,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
}))