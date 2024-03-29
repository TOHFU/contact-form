import { ChangeEvent } from 'react';
import { useToggle } from 'react-use';

import useDarkMode from '@/hooks/useDarkMode';
import Link from 'next/link';
import CheckInput from '../common/CheckInput';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isShowMenu, toggleShowMenu] = useToggle(false);

  const handleClickDarkMode = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
    toggleShowMenu(false);
  };

  const handleMenuClick = () => {
    toggleShowMenu(false);
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
                <CheckInput text={'switch dark mode'} checked={!!isDarkMode} onChange={handleClickDarkMode} />
              </li>
              <li>
                <Link href={{ pathname: '/' }}>
                  <a className={styles.HeaderMenuLink} onClick={handleMenuClick}>
                    TOP
                  </a>
                </Link>
              </li>
              <li>
                <Link href={{ pathname: '/contact' }}>
                  <a className={styles.HeaderMenuLink} onClick={handleMenuClick}>
                    CONTACT
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
