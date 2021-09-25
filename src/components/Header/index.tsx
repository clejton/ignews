/* eslint-disable @next/next/no-img-element */
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLInk } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLInk activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLInk>
          <ActiveLInk activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLInk>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
