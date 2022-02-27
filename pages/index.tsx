import Head from 'next/head';
import Image from 'next/image';
import React, { useRef } from 'react';
import styles from '@/pages/index.module.css';
import {camelCaseToDash} from '../functions/camelCaseToDash'
import { dashToCamelCase } from '../functions/dashToCamelCase';
import {allUniqueBy} from '../functions/allUniqueBy'
export default function Home() {
  const demoRef = useRef('abc');

  return (
    <div className={styles.container}>
      <Head>
        <title>30 secs of code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        // console.log(':', allUniqueBy([1.6,2.1,3.1], Math.round))
      }
      <main>
        <h1 className={styles.title}>30 secs of code</h1>

        <p className={styles.description}>Functions</p>
      </main>
    </div>
  );
}
