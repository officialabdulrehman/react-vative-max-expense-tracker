import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    flex: 1,
    backgroundColor: props.backgroundColors.primary000,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  deleteIconContainer: {
    marginTop: 16,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: props.colors.secondary600,
    alignItems: "center"
  }
}));
