import useDarkMode from '@/hooks/useDarkMode';
import Link from 'next/link';
import { ChangeEvent } from 'react';
import CheckInput from '../common/CheckInput';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const handleClickDarkMode = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderInner}>
        <h1>
          <Link href={{ pathname: '/' }} passHref>
            <a>contact-form</a>
          </Link>
        </h1>
        <CheckInput text={'switch dark mode'} checked={!!isDarkMode} onChange={handleClickDarkMode} />
        <nav className={styles.HeaderNavi}>
          <ul>
            <li>
              <Link href={{ pathname: '/' }}>
                <a className={styles.HeaderNaviLink}>TOP</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
