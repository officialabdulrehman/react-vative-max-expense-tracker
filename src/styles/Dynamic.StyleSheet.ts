import {
  Appearance,
  ColorSchemeName, ImageStyle, StyleSheet, TextStyle, ViewStyle
} from 'react-native';
import { getTheme } from '../themes/theme';
import { ThemeI } from '../themes/themeI';
import { Themes } from '../themes/Themes.enum';

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

type Styles<T extends NamedStyles<T>> = ((theme: ThemeI) => T) | T;

type ColorSchemeNameExtended = ColorSchemeName

export const DynamicStyleSheet = {
  create: <T extends NamedStyles<T> | NamedStyles<any>>(
    styles: Styles<T>,
  ): T => {
    const cache = new Map<ColorSchemeNameExtended, T>();
    const theme = Appearance.getColorScheme();
    const stylesObject = getStyles(
      styles,
      theme === Themes.DARK ? getTheme({ theme: Themes.DARK }) : getTheme({ theme: Themes.LIGHT }),
    );

    cache.set(theme, stylesObject);

    const dynamicStyles: {
      [key: string]: ViewStyle | TextStyle | ImageStyle;
    } = {};

    for (const key in stylesObject) {
      Object.defineProperty(dynamicStyles, key, {
        enumerable: true,
        get() {
          const _theme = Appearance.getColorScheme();

          if (!cache.has(_theme)) {
            cache.set(
              _theme,
              getStyles(styles, _theme === Themes.DARK ? getTheme({ theme: Themes.DARK }) : getTheme({ theme: Themes.LIGHT })),
            );
          }
          const styleObject = cache.get(_theme) as any;

          if (!styleObject) {
            throw new Error(
              `Could not get styleObject from cache ${JSON.stringify(cache)}`,
            );
          }

          return styleObject[key];
        },
      });
    }

    return dynamicStyles as T;
  },
};

function getStyles<T extends NamedStyles<T>>(
  styles: Styles<T>,
  theme: ThemeI,
): T {
  return StyleSheet.create(
    typeof styles === 'function' ? styles(theme) : styles,
  );
}

// USAGE
// const styles = DynamicStyleSheet.create((theme) => ({
//   root: {
//     backgroundColor: theme.colors.primary000
//   }
// }));