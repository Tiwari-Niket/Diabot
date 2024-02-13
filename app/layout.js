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
          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
          <df-messenger
            intent="WELCOME"
            chat-title="Diabot-test"
            agent-id="cfb1e9de-3535-45e4-b1c3-d9cc9321ca67"
            language-code="en"
            className='new'
          ></df-messenger>
        </section>
        {children}
      </body>
    </html>
  )
}
