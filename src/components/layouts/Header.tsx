import { ChangeEvent } from 'react';
import { useToggle } from 'react-use';

import { CSSTransition } from 'react-transition-group';

import useDarkMode from '@/hooks/useDarkMode';
import Link from 'next/link';
import CheckInput from '../common/CheckInput';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isShowMenu, toggleShowMenu] = useToggle(false);

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
        <nav className={styles.HeaderNavi}>
          <button
            type={'button'}
            className={`${styles.HeaderHumburger} ${isShowMenu ? styles.HeaderHumburgerOpen : ''}`}
            onClick={toggleShowMenu}
          >
            <span></span>
          </button>
          {isShowMenu && (
            <ul className={styles.HeaderMenu}>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a className={styles.HeaderMenuLink}>TOP</a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/contact' }}>
                  <a className={styles.HeaderMenuLink}>CONTACT</a>
                </Link>
              </li>
              <li>
                <CheckInput text={'switch dark mode'} checked={!!isDarkMode} onChange={handleClickDarkMode} />
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
