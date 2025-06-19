import { type FC } from 'react';
import { useTheme } from '../../contexts/theme/ThemeContext';
import '../../styles/components/layout//ThemeToggle.css';

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      data-theme={theme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    />
  );
};
