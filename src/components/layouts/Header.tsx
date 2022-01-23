import Link from 'next/link';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderInner}>
        <h1>
          <Link href={{ pathname: '/' }} passHref>
            <a>contact-form</a>
          </Link>
        </h1>
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
