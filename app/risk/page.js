import Link from 'next/link';
import React from 'react';

const Risk = () => {
    return (
        <>
            <section className="predict ml-10 mt-10">
                <div className='flex-between mr-32'>
                    <div>
                        <h1>Risk Level<span className="red">.</span>= High</h1>
                        <div className="history">Compare History</div>
                    </div>
                    <div>
                        <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="358" height="193" viewBox="0 0 358 193" fill="none">
                            <path d="M344 179C344 135.239 326.616 93.2709 295.672 62.3274C264.729 31.3839 222.761 14 179 14C135.239 14 93.2708 31.3839 62.3274 62.3274C31.3839 93.2709 14 135.239 14 179" stroke="#2E282A" stroke-width="28" stroke-linecap="round" />
                        </svg>
                        <svg className='relative' xmlns="http://www.w3.org/2000/svg" width="322" height="195" viewBox="0 0 322 195" fill="none">
                            <path d="M15.0004 180C15.0004 146.121 25.4293 113.063 44.8704 85.3169C64.3115 57.5709 91.8224 36.4819 123.666 24.9148C155.509 13.3477 190.141 11.8633 222.858 20.6631C255.574 29.463 284.788 48.1205 306.532 74.1012" stroke="#E2725B" stroke-width="30" stroke-linecap="round" />
                        </svg>
                        <div className='flex-center'><p className='result'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High</p></div>
                    </div>
                </div>
                <p className='mt-10 lifestyle'>Lifestyle recommendations for you:</p>
            </section>
            <section className='recommendation mt-1'>
                <div></div>
                <button className='mt-14'>Save Details</button>
                <Link href={'/predict'} className='history mt-2 mb-10'>Predict Again</Link>
            </section>
        </>
    )
}

export default Risk;
