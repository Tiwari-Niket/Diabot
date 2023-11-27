"use client";

import Link from "next/link";

const Predict = () => {
    return (
        <section className="predict ml-10 my-10">
            <h1>Predict Your Diabetes Risk<span className="red">.</span></h1>
            <div className="desc mt-2 pl-1 mb-10">Kindly provide the details for a personalised diabetes risk prediction:</div>
            <form className="pl-1 mr-5 sm:mr-20">
                <div className="flex-between mb-2">
                    <label for="age" className="col">Age:</label>
                    <input className="input" id="age" type="number" required />
                </div>
                <div className="flex-between mb-2">
                    <label for="blood-pressure" className="col">Blood Pressure:</label>
                    <input className="input" type="number" id="blood-pressure" required />
                </div>
                <div className="flex-between mb-2">
                    <label for="glucose" className="col">Glucose:</label>
                    <input className="input" type="number" id="glucose" required />
                </div>
                <div className="flex-between mb-2">
                    <label for="skin-thickness" className="col">Skin Thickness:</label>
                    <input className="input" type="number" id="skin-thickness" required />
                </div>
                <div className="flex-between mb-2">
                    <label for="insulin" className="col">Insulin:</label>
                    <input className="input" type="number" id="insulin" required />
                </div>
                <div className="flex-between mb-2">
                    <label for="bmi" className="col">BMI:</label>
                    <input className="input" type="number" id="bmi" required />
                </div>
                <div className="flex-between mb-2">
                    <label for="pregnancy" className="col">Pregnancy:</label>
                    <select id="pregnancy" className="input orange">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="flex-between mb-2">
                    <label for="history" className="col">Family History:</label>
                    <select id="history" className="input orange">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="flex-center">
                    <Link href='/risk' className='button flex-center mt-5 md:mt-10'>Predict Now &nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M25.9642 15.9999L17.4761 24.488C17.342 24.6129 17.1647 24.6809 16.9814 24.6777C16.7982 24.6745 16.6233 24.6002 16.4937 24.4706C16.3641 24.341 16.2899 24.1662 16.2867 23.983C16.2834 23.7997 16.3514 23.6224 16.4764 23.4883L23.7561 16.2073H4.71561C4.52801 16.2073 4.3481 16.1328 4.21545 16.0002C4.08279 15.8675 4.00827 15.6876 4.00827 15.5C4.00827 15.3124 4.08279 15.1325 4.21545 14.9998C4.3481 14.8672 4.52801 14.7927 4.71561 14.7927H23.7561L16.4764 7.51173C16.3514 7.37764 16.2834 7.20029 16.2867 7.01704C16.2899 6.83379 16.3641 6.65895 16.4937 6.52935C16.6233 6.39975 16.7982 6.32552 16.9814 6.32228C17.1647 6.31905 17.342 6.38707 17.4761 6.51202L25.9642 15.0001C26.0967 15.1328 26.1711 15.3126 26.1711 15.5C26.1711 15.6874 26.0967 15.8672 25.9642 15.9999Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Predict;
