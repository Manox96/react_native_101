export const DESIGN_TOKENS = {
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 40,
    xl: 60,
    xxl: 80,
    // Grid base unit
    grid: 8,
  },
  colors: {
    // Primary palette
    primary: {
      black: '#000000',
      white: '#FFFFFF',
      red: '#FF3B30',
    },
    // Neutral palette
    neutral: {
      100: '#FFFFFF',
      200: '#F7F7F7',
      300: '#E5E5E5',
      400: '#D4D4D4',
      500: '#737373',
      600: '#404040',
      700: '#262626',
      800: '#171717',
      900: '#000000',
    },
    // Semantic colors
    semantic: {
      error: '#FF3B30',
      success: '#34C759',
      warning: '#FF9500',
      info: '#007AFF',
    },
    // Background colors
    background: {
      primary: '#FFFFFF',
      secondary: '#F7F7F7',
      tertiary: '#000000',
    }
  },
  typography: {
    // Font sizes
    size: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
      display: 64,
    },
    // Font weights
    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    } as const,
    // Letter spacing
    letterSpacing: {
      tight: -0.5,
      normal: 0,
      wide: 1,
      wider: 2,
      widest: 4,
    },
    // Line heights
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    // Font families (if using custom fonts)
    family: {
      sans: 'System',
      mono: 'Courier',
    }
  },
  // Borders and outlines
  border: {
    width: {
      thin: 1,
      normal: 2,
      thick: 4,
    },
    radius: {
      none: 0,
      sm: 4,
      md: 8,
      lg: 16,
      full: 9999,
    }
  },
  // Shadows
  shadow: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    }
  },
  // Layout
  layout: {
    maxWidth: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    zIndex: {
      base: 0,
      above: 1,
      below: -1,
      modal: 1000,
      overlay: 2000,
      highest: 9999,
    }
  },
  // Motion
  motion: {
    duration: {
      fast: 150,
      normal: 250,
      slow: 350,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    }
  }
};

export const BREAKPOINTS = {
  phone: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
}; 