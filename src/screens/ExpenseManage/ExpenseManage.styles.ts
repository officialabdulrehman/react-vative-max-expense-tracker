import { DynamicStyleSheet } from "../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    flex: 1,
    backgroundColor: props.backgroundColors.primary000,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 24
  },
  contentContainer: {
    backgroundColor: props.backgroundColors.primary100,
    borderRadius: 10,
    paddingTop: 5,
    paddingHorizontal: 5,
    paddingBottom: 20
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginHorizontal: 6,
    minWidth: 90
  },
  deleteIconContainer: {
    marginTop: 16,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: props.colors.secondary600,
    alignItems: "center"
  }
}));
