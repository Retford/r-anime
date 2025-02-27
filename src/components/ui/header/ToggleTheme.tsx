'use client';

import { Moon, Sun } from 'lucide-react';
import { Toggle } from '../toggle';
import { useTheme } from 'next-themes';

export const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const onToggle = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Toggle variant='outline' onClick={onToggle} className='hidden sm:flex'>
      {resolvedTheme === 'light' ? <Sun /> : <Moon />}
    </Toggle>
  );
};
