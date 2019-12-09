import { useRef, useEffect, MutableRefObject } from 'react';

/**
 * Invokes a callback when click is happened outside of a component.
 */
export default (ref: MutableRefObject<HTMLElement>, callback: (event: MouseEvent) => void) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current!.contains(event.target as Element)) {
        callbackRef.current(event);
      }
    };

    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  }, [ref]);
};
