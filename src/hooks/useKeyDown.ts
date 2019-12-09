import { useEffect } from 'react';

/**
 * Executes a callback onKeyDown.
 */
export default (key: string, callback: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === key.toLocaleLowerCase()) {
        callback(event);
      }
    };

    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, [key, callback]);
};
