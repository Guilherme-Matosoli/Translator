import type { NextPage } from 'next';
import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyles';

import { Container, Content, Footer } from '../styles/styles';

import TranslatorBoxs from '../components/TranslatorBoxs';



const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet='UTF-8'/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content='A language translator'/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>

        <title>Translator</title>
      </Head>

      <Container>
          <header>
              <h1>
                Language Translator
              </h1>

              <span>
                By: <a href="https://github.com/Guilherme-Matosoli" target="_blank" rel='noreferrer'>Matosoli</a>
              </span>
          </header>

          <Content>
              <TranslatorBoxs />
          </Content>

          <Footer>
             <span>&copy; {new Date().getFullYear()} Translator</span>
          </Footer>
      </Container>



    </>
  )
};

export default Home;