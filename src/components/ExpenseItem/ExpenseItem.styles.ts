import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: props.backgroundColors.primary000,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.75
  },
  textBase: {
    color: props.colors.primary400,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold"
  },
  date: {

  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: props.backgroundColors.primary100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "26%"
  },
  amount: {
    color: props.colors.primary200,
    fontWeight: "bold",
    fontSize: 16,
  },

}))