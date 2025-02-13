const Colors = {
  // Primary Colors
  primary: {
    main: '#D0B07B',
    light: '#4DA2FF',
    dark: '#0055B3',
  },
  // Secondary Colors
  secondary: {
    main: '#5856D6',
    light: '#7A79E0',
    dark: '#3E3BA3',
  },
  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    grey100: '#F5F5F5',
    grey200: '#EEEEEE',
    grey300: '#E0E0E0',
    grey400: '#BDBDBD',
    grey500: '#9E9E9E',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',
  },
  // Status Colors
  status: {
    success: '#34C759',
    error: '#FF3B30',
    warning: '#FF9500',
    info: '#5856D6',
  },
  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
  },
  // Text Colors
  text: {
    primary: '#000000',
    secondary: '#757575',
    disabled: '#9E9E9E',
    inverse: '#FFFFFF',
  },
} as const;

export {Colors};
