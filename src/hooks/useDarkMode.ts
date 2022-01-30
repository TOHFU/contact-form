import { Dispatch, SetStateAction, useEffect } from 'react';
import { useLocalStorage, useMedia } from 'react-use';

const useDarkMode = (): [boolean | undefined, Dispatch<SetStateAction<boolean | undefined>>] => {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>('dark-mode-enabled', false);
  const prefersDarkMode = useMedia('(prefers-color-scheme: dark)', false);

  // OS設定より手動設定した値を優先する
  const isEnabledDarkmode = enabledState ?? prefersDarkMode;

  useEffect(() => {
    const attributeName = 'data-color-scheme';
    if (isEnabledDarkmode) {
      window.document.documentElement.setAttribute(attributeName, 'dark');
    } else {
      window.document.documentElement.removeAttribute(attributeName);
    }
  }, [isEnabledDarkmode]);

  return [enabledState, setEnabledState];
};

export default useDarkMode;
