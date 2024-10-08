'use client';
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className='flex-between m-10 nav'>
            <Link href='/' className='logo'>diabot<span className='red'>.</span></Link>
            <div className='flex-between w-[60%] pr-2 md:w-[40%]'>
                <Link href='/predict' className='nav-button flex-center'>Predict Now &nbsp;&nbsp;
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31 31" fill="none">
                        <path d="M25.9642 15.5899L17.4761 24.078C17.342 24.2029 17.1647 24.2709 16.9814 24.2677C16.7982 24.2645 16.6233 24.1902 16.4937 24.0606C16.3641 23.931 16.2899 23.7562 16.2867 23.573C16.2834 23.3897 16.3514 23.2124 16.4764 23.0783L23.7561 15.7973H4.71561C4.52801 15.7973 4.3481 15.7228 4.21545 15.5902C4.08279 15.4575 4.00827 15.2776 4.00827 15.09C4.00827 14.9024 4.08279 14.7225 4.21545 14.5898C4.3481 14.4572 4.52801 14.3827 4.71561 14.3827H23.7561L16.4764 7.10173C16.3514 6.96764 16.2834 6.79029 16.2867 6.60704C16.2899 6.42379 16.3641 6.24894 16.4937 6.11935C16.6233 5.98975 16.7982 5.91551 16.9814 5.91228C17.1647 5.90905 17.342 5.97707 17.4761 6.10201L25.9642 14.5901C26.0967 14.7228 26.1711 14.9025 26.1711 15.09C26.1711 15.2774 26.0967 15.4572 25.9642 15.5899Z" fill="#2E282A" />
                    </svg>
                </Link>
                {
                    isHidden &&
                    <button onClick={() => {
                        setNavbar(true);
                        setIsHidden(false);
                    }}>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7083 1.1875C27.7083 1.50244 27.5832 1.80449 27.3605 2.02719C27.1378 2.24989 26.8358 2.375 26.5208 2.375H1.1875C0.872555 2.375 0.57051 2.24989 0.347811 2.02719C0.125111 1.80449 0 1.50244 0 1.1875C0 0.872555 0.125111 0.57051 0.347811 0.347811C0.57051 0.125111 0.872555 0 1.1875 0H26.5208C26.8358 0 27.1378 0.125111 27.3605 0.347811C27.5832 0.57051 27.7083 0.872555 27.7083 1.1875ZM27.7083 9.10417C27.7083 9.41911 27.5832 9.72116 27.3605 9.94386C27.1378 10.1666 26.8358 10.2917 26.5208 10.2917H1.1875C0.872555 10.2917 0.57051 10.1666 0.347811 9.94386C0.125111 9.72116 0 9.41911 0 9.10417C0 8.78922 0.125111 8.48718 0.347811 8.26448C0.57051 8.04178 0.872555 7.91667 1.1875 7.91667H26.5208C26.8358 7.91667 27.1378 8.04178 27.3605 8.26448C27.5832 8.48718 27.7083 8.78922 27.7083 9.10417ZM27.7083 17.0208C27.7083 17.3358 27.5832 17.6378 27.3605 17.8605C27.1378 18.0832 26.8358 18.2083 26.5208 18.2083H1.1875C0.872555 18.2083 0.57051 18.0832 0.347811 17.8605C0.125111 17.6378 0 17.3358 0 17.0208C0 16.7059 0.125111 16.4038 0.347811 16.1811C0.57051 15.9584 0.872555 15.8333 1.1875 15.8333H26.5208C26.8358 15.8333 27.1378 15.9584 27.3605 16.1811C27.5832 16.4038 27.7083 16.7059 27.7083 17.0208Z" fill="#2E282A" />
                        </svg>
                    </button>
                }
                {navbar &&
                    <div className="navbar absolute top-[5%] right-[3%] flex-col flex-center">
                        <button onClick={() => {
                            setIsHidden(true);
                            setNavbar(false);
                        }} className=" absolute top-[2%] right-[3%]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31 31" fill="none">
                                <path d="M7.32369 4.56723L15.09 12.3335L22.8161 4.60747C22.9867 4.42582 23.1923 4.28051 23.4205 4.18024C23.6487 4.07998 23.8948 4.02683 24.144 4.02399C24.6776 4.02399 25.1894 4.23596 25.5667 4.61329C25.944 4.99061 26.156 5.50237 26.156 6.03599C26.1607 6.28266 26.1149 6.52769 26.0215 6.75604C25.9281 6.9844 25.789 7.19125 25.6128 7.36391L17.7861 15.09L25.6128 22.9167C25.9444 23.2411 26.1388 23.6804 26.156 24.144C26.156 24.6776 25.944 25.1894 25.5667 25.5667C25.1894 25.944 24.6776 26.156 24.144 26.156C23.8876 26.1666 23.6318 26.1238 23.3928 26.0303C23.1538 25.9368 22.9368 25.7946 22.7557 25.6127L15.09 17.8464L7.34381 25.5926C7.17381 25.7682 6.97071 25.9084 6.74625 26.0051C6.52179 26.1018 6.2804 26.1531 6.03601 26.156C5.50239 26.156 4.99063 25.944 4.61331 25.5667C4.23599 25.1894 4.02401 24.6776 4.02401 24.144C4.01932 23.8973 4.06508 23.6523 4.1585 23.4239C4.25192 23.1956 4.39101 22.9887 4.56725 22.8161L12.3939 15.09L4.56725 7.26331C4.23564 6.93889 4.04119 6.49958 4.02401 6.03599C4.02401 5.50237 4.23599 4.99061 4.61331 4.61329C4.99063 4.23596 5.50239 4.02399 6.03601 4.02399C6.51889 4.03002 6.98165 4.22519 7.32369 4.56723Z" fill="black" />
                            </svg>
                        </button>
                        <Link href='/' className="page mt-7">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="230" height="30" viewBox="0 0 230 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6667 15C30.6667 14.7348 31.4744 14.4804 32.9122 14.2929C34.35 14.1054 36.3 14 38.3333 14H191.667C193.7 14 195.65 14.1054 197.088 14.2929C198.526 14.4804 199.333 14.7348 199.333 15C199.333 15.2652 198.526 15.5196 197.088 15.7071C195.65 15.8946 193.7 16 191.667 16H38.3333C36.3 16 34.35 15.8946 32.9122 15.7071C31.4744 15.5196 30.6667 15.2652 30.6667 15Z" fill="#E2725B" />
                        </svg>
                        <Link href='/predict' className="page">Predict Diabetes</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="230" height="30" viewBox="0 0 230 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6667 15C30.6667 14.7348 31.4744 14.4804 32.9122 14.2929C34.35 14.1054 36.3 14 38.3333 14H191.667C193.7 14 195.65 14.1054 197.088 14.2929C198.526 14.4804 199.333 14.7348 199.333 15C199.333 15.2652 198.526 15.5196 197.088 15.7071C195.65 15.8946 193.7 16 191.667 16H38.3333C36.3 16 34.35 15.8946 32.9122 15.7071C31.4744 15.5196 30.6667 15.2652 30.6667 15Z" fill="#E2725B" />
                        </svg>
                        <Link href='/' className="page">Find A Doctor</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="230" height="30" viewBox="0 0 230 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6667 15C30.6667 14.7348 31.4744 14.4804 32.9122 14.2929C34.35 14.1054 36.3 14 38.3333 14H191.667C193.7 14 195.65 14.1054 197.088 14.2929C198.526 14.4804 199.333 14.7348 199.333 15C199.333 15.2652 198.526 15.5196 197.088 15.7071C195.65 15.8946 193.7 16 191.667 16H38.3333C36.3 16 34.35 15.8946 32.9122 15.7071C31.4744 15.5196 30.6667 15.2652 30.6667 15Z" fill="#E2725B" />
                        </svg>
                        <Link href='/' className="page">Settings</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="230" height="30" viewBox="0 0 230 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6667 15C30.6667 14.7348 31.4744 14.4804 32.9122 14.2929C34.35 14.1054 36.3 14 38.3333 14H191.667C193.7 14 195.65 14.1054 197.088 14.2929C198.526 14.4804 199.333 14.7348 199.333 15C199.333 15.2652 198.526 15.5196 197.088 15.7071C195.65 15.8946 193.7 16 191.667 16H38.3333C36.3 16 34.35 15.8946 32.9122 15.7071C31.4744 15.5196 30.6667 15.2652 30.6667 15Z" fill="#E2725B" />
                        </svg>
                        <Link href='/' className="page">Check History</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="230" height="30" viewBox="0 0 230 30" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6667 15C30.6667 14.7348 31.4744 14.4804 32.9122 14.2929C34.35 14.1054 36.3 14 38.3333 14H191.667C193.7 14 195.65 14.1054 197.088 14.2929C198.526 14.4804 199.333 14.7348 199.333 15C199.333 15.2652 198.526 15.5196 197.088 15.7071C195.65 15.8946 193.7 16 191.667 16H38.3333C36.3 16 34.35 15.8946 32.9122 15.7071C31.4744 15.5196 30.6667 15.2652 30.6667 15Z" fill="#E2725B" />
                        </svg>
                        <Link href='/' className="mb-2 page">Logout</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Nav;
