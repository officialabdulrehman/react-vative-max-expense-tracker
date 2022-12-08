import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    backgroundColor: props.backgroundColors.primary000,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
    shadowColor: props.backgroundColors.primary400,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
  },
  period: {
    fontSize: 14,
    color: props.colors.primary400
  },
  sum: {
    fontSize: 18,
    fontWeight: "bold",
    color: props.colors.secondary400
  }
}))