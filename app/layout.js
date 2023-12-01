'use client';
import Nav from '@components/Nav';
import '@styles/globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Chatbot from '@components/Chatbot';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [query, setQuery] = useState(true);
  const [chat, setChat] = useState(false);
  const [messages, setMessages] = useState([]);

  return (
    <html lang="en" className='cursor'>
      <body>
        <Nav />
        <section>
          {
            query ?
              <button className='query' onClick={() => setQuery(false)}>
                <svg className="w-10 md:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
                  <path d="M25 8.90947e-07C18.3719 -0.0017676 12.0146 2.6293 7.32627 7.31449C2.63796 11.9997 0.0026517 18.3553 0 24.9833C0.000875362 28.2655 0.648214 31.5154 1.90506 34.5474C3.1619 37.5794 5.00363 40.3341 7.32509 42.6543C9.64656 44.9746 12.4023 46.8148 15.435 48.07C18.4676 49.3253 21.7178 49.9709 25 49.97C29.3533 49.97 34.7 48.8767 38.5133 46.8133L47.8133 49.8867C48.107 49.9831 48.4218 49.9959 48.7223 49.9237C49.0229 49.8515 49.2975 49.6972 49.5153 49.4779C49.7332 49.2586 49.8858 48.9831 49.9561 48.6821C50.0264 48.3811 50.0116 48.0664 49.9133 47.7733L46.8267 38.5367C49.0667 34.6267 50 29.5167 50 24.9833C49.9973 18.3553 47.362 11.9997 42.6737 7.31449C37.9854 2.6293 31.6281 -0.0017676 25 8.90947e-07Z" fill="black" />
                </svg>
              </button> :
              <div className='chatbot chatbot-query'>
                <div className='flex-between'>
                  <div className='chatbot-logo'>diabot<span className='red'>.</span></div>
                  <button onClick={() => setQuery(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31 31" fill="none">
                      <path d="M7.32369 4.56723L15.09 12.3335L22.8161 4.60747C22.9867 4.42582 23.1923 4.28051 23.4205 4.18024C23.6487 4.07998 23.8948 4.02683 24.144 4.02399C24.6776 4.02399 25.1894 4.23596 25.5667 4.61329C25.944 4.99061 26.156 5.50237 26.156 6.03599C26.1607 6.28266 26.1149 6.52769 26.0215 6.75604C25.9281 6.9844 25.789 7.19125 25.6128 7.36391L17.7861 15.09L25.6128 22.9167C25.9444 23.2411 26.1388 23.6804 26.156 24.144C26.156 24.6776 25.944 25.1894 25.5667 25.5667C25.1894 25.944 24.6776 26.156 24.144 26.156C23.8876 26.1666 23.6318 26.1238 23.3928 26.0303C23.1538 25.9368 22.9368 25.7946 22.7557 25.6127L15.09 17.8464L7.34381 25.5926C7.17381 25.7682 6.97071 25.9084 6.74625 26.0051C6.52179 26.1018 6.2804 26.1531 6.03601 26.156C5.50239 26.156 4.99063 25.944 4.61331 25.5667C4.23599 25.1894 4.02401 24.6776 4.02401 24.144C4.01932 23.8973 4.06508 23.6523 4.1585 23.4239C4.25192 23.1956 4.39101 22.9887 4.56725 22.8161L12.3939 15.09L4.56725 7.26331C4.23564 6.93889 4.04119 6.49958 4.02401 6.03599C4.02401 5.50237 4.23599 4.99061 4.61331 4.61329C4.99063 4.23596 5.50239 4.02399 6.03601 4.02399C6.51889 4.03002 6.98165 4.22519 7.32369 4.56723Z" fill="black" />
                    </svg>
                  </button>
                </div>
                <div className='flex-start mt-6'>
                  <h1>Hi There!</h1>
                  <Image
                    src='/waving-emoji.png'
                    width={54}
                    height={54}
                    alt='emoji'
                    className='mt-2'
                  />
                </div>
                <p className='mt-6'>How can we help you?</p>
                <div className='flex-center mt-8'>
                  <Link href='/predict' onClick={() => setQuery(true)} className='mr-7 chatbot-button'>Predict Diabetes Risk</Link>
                  <button className='chatbot-button' onClick={() => {setChat(true)}}>Ask A Question</button>
                </div>
              </div>
          }
          {
            chat?
              <Chatbot setChat={setChat} setQuery={setQuery} messages={messages} setMessages={setMessages} /> :
              <div></div>
          }
        </section>
        {children}
      </body>
    </html>
  )
}
