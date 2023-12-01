"use client";
import { useEffect, useRef, useState } from 'react';

const Chatbot = ({ setChat, setQuery, messages, setMessages }) => {

    const [inputMessage, setInputMessage] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Call your function here
            sendMessage();
        }
    };

    const sendMessage = async () => {
        if (inputMessage.trim() === '') return;

        // Send user message to the backend
        // const response = await fetch('/api/webhook', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ message: inputMessage }),
        // });
        const data = 'Hi! Please let us know your query.Hi! Please let us know your query.Hi! Please let us know your query.Hi! Please let us know your query.';

        // Update the conversation history with the bot's response
        setMessages([...messages, { text: inputMessage, type: 'user' }, { text: data, type: 'bot' }]);

        // Clear the input field
        setInputMessage('');
    };

    const chatContainerRef = useRef(null);
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className='chatbot chatbot-query'>
            <div className='flex-between' >
                <div className='chatbot-logo'>diabot<span className='red'>.</span></div>
                <button
                    onClick={() => {
                        setQuery(true);
                        setChat(false);
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31 31" fill="none">
                        <path d="M7.32369 4.56723L15.09 12.3335L22.8161 4.60747C22.9867 4.42582 23.1923 4.28051 23.4205 4.18024C23.6487 4.07998 23.8948 4.02683 24.144 4.02399C24.6776 4.02399 25.1894 4.23596 25.5667 4.61329C25.944 4.99061 26.156 5.50237 26.156 6.03599C26.1607 6.28266 26.1149 6.52769 26.0215 6.75604C25.9281 6.9844 25.789 7.19125 25.6128 7.36391L17.7861 15.09L25.6128 22.9167C25.9444 23.2411 26.1388 23.6804 26.156 24.144C26.156 24.6776 25.944 25.1894 25.5667 25.5667C25.1894 25.944 24.6776 26.156 24.144 26.156C23.8876 26.1666 23.6318 26.1238 23.3928 26.0303C23.1538 25.9368 22.9368 25.7946 22.7557 25.6127L15.09 17.8464L7.34381 25.5926C7.17381 25.7682 6.97071 25.9084 6.74625 26.0051C6.52179 26.1018 6.2804 26.1531 6.03601 26.156C5.50239 26.156 4.99063 25.944 4.61331 25.5667C4.23599 25.1894 4.02401 24.6776 4.02401 24.144C4.01932 23.8973 4.06508 23.6523 4.1585 23.4239C4.25192 23.1956 4.39101 22.9887 4.56725 22.8161L12.3939 15.09L4.56725 7.26331C4.23564 6.93889 4.04119 6.49958 4.02401 6.03599C4.02401 5.50237 4.23599 4.99061 4.61331 4.61329C4.99063 4.23596 5.50239 4.02399 6.03601 4.02399C6.51889 4.03002 6.98165 4.22519 7.32369 4.56723Z" fill="black" />
                    </svg>
                </button>
            </div>
            <div ref={chatContainerRef} className='scrollbar-hide max-h-[315px] mt-5 overflow-y-auto'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        padding: '2px 8px',
                        marginTop: messages.length !== 0 ? '10px' : '250px',
                        marginBottom: '10px',
                        width: '250px',
                        borderRadius: '5px',
                        fontFamily: 'Poppins',
                        backgroundColor: 'white',
                        color: '#2C2C2E',
                        textAlign: 'left',
                    }}>
                    <div
                        style={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                        }}
                    >
                        Diabot
                    </div>
                    Hi! Please let us know your query.
                </div>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start',
                            alignItems: msg.type !== 'user' ? 'start' : 'end',
                            width: '400px'
                        }}
                    >
                        <div
                            style={{
                                padding: '2px 8px',
                                marginBottom: '10px',
                                width: '250px',
                                borderRadius: '5px',
                                fontFamily: 'Poppins',
                                backgroundColor: msg.type !== 'user' ? 'white' : '#E2725B',
                                color: msg.type !== 'user' ? '#2C2C2E' : '#fff',
                                textAlign: msg.type !== 'user' ? 'left' : 'right',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '16px',
                                }}
                            >
                                {msg.type !== 'user' ? 'Diabot' : ''}
                            </div>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '10px', backgroundColor: 'white' }} className='absolute bottom-[1%] mb-1 w-[93%]'>
                <input
                    type="text"
                    placeholder="Type here..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    style={{ width: '88%', padding: '5px', outline: 'none' }}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={sendMessage} style={{ marginLeft: '20px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_177_217)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59168 2.71245L2.38083 7.25004H7.25001C7.66422 7.25004 8.00001 7.58582 8.00001 8.00004C8.00001 8.41425 7.66422 8.75004 7.25001 8.75004H2.38083L1.59168 13.2876L13.9294 8.00004L1.59168 2.71245ZM0.988747 8.00004L0.0636748 2.68087C-0.0111098 2.25086 0.128032 1.81135 0.436661 1.50272C0.824446 1.11494 1.40926 1.00231 1.91333 1.21834L15.3157 6.9622C15.7308 7.14013 16 7.54835 16 8.00004C16 8.45172 15.7308 8.85995 15.3157 9.03788L1.91333 14.7817C1.40926 14.9978 0.824446 14.8851 0.436661 14.4974C0.128032 14.1887 -0.01111 13.7492 0.0636748 13.3192L0.988747 8.00004Z" fill="#8E8E93" />
                        </g>
                        <defs>
                            <clipPath id="clip0_177_217">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
