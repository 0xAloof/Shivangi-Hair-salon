import { useTheme } from '../context/ThemeContext';

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      data-testid="animated-background"
      data-theme={theme}
      aria-hidden="true"
      className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden ${
        isDark ? 'bg-[#070709]' : 'bg-[#F4F1EA]'
      }`}
    />
  );
}
