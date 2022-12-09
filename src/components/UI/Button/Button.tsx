import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./Button.styles";
import { ButtonMode } from "./ButtonMode.enum";

type Props = {
  children: string;
  onPress: () => void;
  mode?: ButtonMode;
  style?: StyleProp<ViewStyle>;
};

export const Button = (props: Props) => {
  const { children, onPress, mode, style } = props;
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View
          style={[styles.container, mode === ButtonMode.FLAT && styles.flat]}
        >
          <Text
            style={[styles.text, mode === ButtonMode.FLAT && styles.flatText]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
