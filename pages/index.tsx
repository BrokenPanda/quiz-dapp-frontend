import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Quiz from './quiz'
import styles from '../styles/Home.module.css'
import { getQuizData } from '../lib/quiz';
import QuizData from '../types/Quiz';

export default function Home({ quizData }: { quizData: QuizData[] }) {
  return (<div className={styles.container}>
    <Head>
      <title>Quiz dApp</title>
      <meta name="description" content="Decentralized Quiz App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Quiz quizData={quizData}/>
  </div>);
}

export const getStaticProps: GetStaticProps = async () => {
  const quizData = await getQuizData();
  return {
      props: {
          quizData
      }
  }
}