import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { AppState } from 'store/store';
import bannerImg from 'assets/images/background.png';
import styles from 'styles/Banner.module.css';

const Banner: React.FC = (props) => {
  const router = useRouter();
  console.log(router);

  const splittedPathname = router.asPath.split('/');
  // @ts-ignore
  const { currentElement } = useSelector((state: AppState) => state[splittedPathname[1]] || {});
  const isListPage = splittedPathname[1] === '' || isNaN(+splittedPathname[2]);
  const title = isListPage ? 'The Rick and Morty Challenge' : currentElement?.name;
  console.log(splittedPathname);

  return (
    <div
      className={isListPage ? styles.bannerHome : styles.banner}
      style={{
        backgroundImage: `url(${bannerImg.src})`,
        height: isListPage ? '60vh' : '30vh'
      }}>
      <div className={styles.subInfo}>
        <Link href={'/'}>
          <h1 className={styles.title}>{title}</h1>
        </Link>
        {isListPage && (
          <>
            <h2 className={styles.subTitle}>lorem ipsum dolor sit amet</h2>
            <button className={styles.button}>Subscribe</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
