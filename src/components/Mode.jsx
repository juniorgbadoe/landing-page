import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function Mode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="fixed top-16 right-4 z-50">
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full shadow hover:scale-105 transition"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}

export default Mode;