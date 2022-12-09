import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./Input.styles";

type Props = {
  label: string;
  config?: TextInputProps;
};

export const Input = (props: Props) => {
  const { label, config } = props;

  const inputStyles: Partial<TextInputProps>["style"][] = [styles.textInput];
  if (config?.multiline) {
    inputStyles.push(styles.textInputMultiline);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...config} />
    </View>
  );
};
