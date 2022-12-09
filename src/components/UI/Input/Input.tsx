import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { styles } from "./Input.styles";

type Props = {
  label: string;
  config?: TextInputProps;
  style?: StyleProp<TextStyle>;
};

export const Input = (props: Props) => {
  const { label, config, style } = props;

  const inputStyles: Partial<TextInputProps>["style"][] = [styles.textInput];
  if (config?.multiline) {
    inputStyles.push(styles.textInputMultiline);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...config} />
    </View>
  );
};
