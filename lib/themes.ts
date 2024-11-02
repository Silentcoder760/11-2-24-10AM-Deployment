export type Theme = 'light' | 'dark';

export const themes = {
  light: {
    background: 'bg-white',
    text: 'text-gray-900',
    card: 'bg-white border-gray-200',
    hover: 'hover:bg-gray-100',
    muted: 'text-gray-600',
    accent: 'bg-blue-500'
  },
  dark: {
    background: 'bg-black',
    text: 'text-white',
    card: 'bg-gray-900/50 border-gray-800',
    hover: 'hover:bg-gray-800',
    muted: 'text-gray-400',
    accent: 'bg-blue-600'
  }
};