import Image from 'next/image';
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';

import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" width={110} height={31} alt="ig.news" />
        <nav>
          <ActiveLink activeClass={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClass={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
