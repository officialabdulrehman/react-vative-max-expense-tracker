import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    marginHorizontal: 5,
    marginVertical: 10
  },
  label: {
    fontSize: 14,
    color: props.colors.primary400,
    marginBottom: 4,
    marginLeft: 4
  },
  textInput: {
    color: props.textColors.primary400,
    backgroundColor: props.backgroundColors.primary100,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16
  },
  textInputMultiline: {
    minHeight: 100,
    textAlignVertical: "top"
  },
}))