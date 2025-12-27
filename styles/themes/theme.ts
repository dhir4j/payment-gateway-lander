export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundSecondary: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
    warning: string;
    neonGlow: string;
    gradient: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    mono: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    neon: string;
    neonHover: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#b5179e',        // Raspberry Plum
    primaryDark: '#560bad',    // Ultrasonic Blue
    primaryLight: '#f72585',   // Neon Pink
    secondary: '#4895ef',      // Blue Energy
    accent: '#4cc9f0',         // Sky Aqua
    background: '#0A0A0F',     // Deep dark
    backgroundSecondary: '#1A1A2E',
    surface: '#16213E',
    text: '#E4E4E7',
    textSecondary: '#A1A1AA',
    border: '#b5179e40',       // Raspberry Plum with transparency
    success: '#4ADE80',
    error: '#F87171',
    warning: '#FBBF24',
    neonGlow: '#f72585',       // Neon Pink
    gradient: 'linear-gradient(135deg, #f72585 0%, #7209b7 25%, #480ca8 50%, #4361ee 75%, #4cc9f0 100%)',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'DM Serif Display', serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    neon: '0 0 20px rgba(247, 37, 133, 0.5), 0 0 40px rgba(114, 9, 183, 0.3)',
    neonHover: '0 0 30px rgba(247, 37, 133, 0.8), 0 0 60px rgba(114, 9, 183, 0.5)',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
};

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#7209b7',        // Indigo Bloom
    primaryDark: '#560bad',    // Ultrasonic Blue
    primaryLight: '#b5179e',   // Raspberry Plum
    secondary: '#4361ee',      // Electric Sapphire
    accent: '#f72585',         // Neon Pink
    background: '#FAF5FF',     // Purple-tinted background
    backgroundSecondary: '#FEFBFF',  // Subtle purple-tinted white
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#7209b730',
    success: '#059669',
    error: '#DC2626',
    warning: '#D97706',
    neonGlow: '#f72585',       // Neon Pink glow
    gradient: 'linear-gradient(135deg, #f72585 0%, #7209b7 25%, #480ca8 50%, #4361ee 75%, #4cc9f0 100%)',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'DM Serif Display', serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    neon: '0 0 20px rgba(247, 37, 133, 0.4), 0 0 40px rgba(114, 9, 183, 0.3)',
    neonHover: '0 0 30px rgba(247, 37, 133, 0.6), 0 0 60px rgba(114, 9, 183, 0.5)',
  },
  borderRadius: darkTheme.borderRadius,
  spacing: darkTheme.spacing,
};
