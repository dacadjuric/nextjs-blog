import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from './HomePage';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/layout';
import { getSortedPostsData } from '../../lib/posts';
import Date from '../components/date';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <h1>
      </h1>
      <HomePage />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Hello my name is Slim Shady.]</p>
        <p>
          (THIS IS A SAMPLE.)
        </p>
        <p> {console.log(allPostsData)} </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}> Blog </h2>
        <ul className={styles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
