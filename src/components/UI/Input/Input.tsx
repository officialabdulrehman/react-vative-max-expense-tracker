import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./Input.styles";

type Props = {
  label: string;
  config?: TextInputProps;
};

export const Input = (props: Props) => {
  const { label, config } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.textInput} {...config} />
    </View>
  );
};
