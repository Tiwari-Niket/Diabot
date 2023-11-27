import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="main ml-10 mt-12 md:mt-28">
        <div className="flex-start">
          <h1>
            Empowering healthier
            <span className="red"> diabetes-free</span> lives,
            one prediction at a time.
          </h1>
          <Image
            src='/home.png'
            alt='homo'
            width={500}
            height={500}
            className="lg:w-[500px] mr-5 xl:mt-14 w-[1000px]  mt-32"
          />
        </div>
        <Link href="/predict" className='button flex-center mt-10'>Predict Now &nbsp;&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M25.9642 15.9999L17.4761 24.488C17.342 24.6129 17.1647 24.6809 16.9814 24.6777C16.7982 24.6745 16.6233 24.6002 16.4937 24.4706C16.3641 24.341 16.2899 24.1662 16.2867 23.983C16.2834 23.7997 16.3514 23.6224 16.4764 23.4883L23.7561 16.2073H4.71561C4.52801 16.2073 4.3481 16.1328 4.21545 16.0002C4.08279 15.8675 4.00827 15.6876 4.00827 15.5C4.00827 15.3124 4.08279 15.1325 4.21545 14.9998C4.3481 14.8672 4.52801 14.7927 4.71561 14.7927H23.7561L16.4764 7.51173C16.3514 7.37764 16.2834 7.20029 16.2867 7.01704C16.2899 6.83379 16.3641 6.65895 16.4937 6.52935C16.6233 6.39975 16.7982 6.32552 16.9814 6.32228C17.1647 6.31905 17.342 6.38707 17.4761 6.51202L25.9642 15.0001C26.0967 15.1328 26.1711 15.3126 26.1711 15.5C26.1711 15.6874 26.0967 15.8672 25.9642 15.9999Z" fill="white" />
          </svg>
        </Link>
      </section>
      <div className="flex-center mt-10">
        <h1 className="features">Our Features<span className="red">.</span></h1>
      </div>
      <section>
        <div className="md:flex-start flex-center md:flex-row flex-col m-10">
          <div className="feature-1 md:mr-10">
            <h1>Have a question?<br /><span className="red">Chat with our AI assistant.</span></h1><br />
            <p>
              India has been dubbed the "<strong>diabetes capital of the world</strong>". Many people are unaware of the risk factors and may not recognise the signs until the disease has progressed to a critical stage.
              <br /><br />Get instant answers to your diabetes related questions with our 24/7 available AI chatbot.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="red feature-1-h1">101 M +</h1>
            <p className="feature-1-p">Indians Have Diabetes</p>
            <h1 className="red feature-1-h1">136 M +</h1>
            <p className="feature-1-p">Indians Are Pre-Diabetic</p>
          </div>
        </div>
      </section>
      <section>
        <div className="md:flex-center md:flex-row flex-center flex-col m-10">
          <div className="invisible h-0 md:visible mr-20 md:mb-40">
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="358" height="193" viewBox="0 0 358 193" fill="none">
              <path d="M344 179C344 135.239 326.616 93.2709 295.672 62.3274C264.729 31.3839 222.761 14 179 14C135.239 14 93.2708 31.3839 62.3274 62.3274C31.3839 93.2709 14 135.239 14 179" stroke="#2E282A" stroke-width="28" stroke-linecap="round" />
            </svg>
            <svg className='relative' xmlns="http://www.w3.org/2000/svg" width="322" height="195" viewBox="0 0 322 195" fill="none">
              <path d="M15.0004 180C15.0004 146.121 25.4293 113.063 44.8704 85.3169C64.3115 57.5709 91.8224 36.4819 123.666 24.9148C155.509 13.3477 190.141 11.8633 222.858 20.6631C255.574 29.463 284.788 48.1205 306.532 74.1012" stroke="#E2725B" stroke-width="30" stroke-linecap="round" />
            </svg>
            <div className='flex-center'><p className='result'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High</p></div>
          </div>
          <div className="feature-2">
            <h1>Calculate Your Diabetes Risk Score</h1>
            <p className="mt-5 mb-10">Discover your personal diabetes risk score within seconds. Take control of your health journey by understanding your risk level. This score is categorised into three risk levels: <strong>Low, Medium, & High</strong>. Each category is associated with tailored lifestyle recommendations, empowering users to proactively manage their health.</p>
            <Link href='/predict' className='feature-2-button flex-center'>Predict Now &nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31 31" fill="none">
                <path d="M25.9642 16.4999L17.4761 24.9881C17.342 25.113 17.1647 25.181 16.9814 25.1778C16.7982 25.1746 16.6233 25.1003 16.4937 24.9707C16.3641 24.8411 16.2899 24.6663 16.2867 24.4831C16.2834 24.2998 16.3514 24.1224 16.4764 23.9884L23.7561 16.7074H4.71563C4.52803 16.7074 4.34811 16.6329 4.21546 16.5003C4.08281 16.3676 4.00828 16.1877 4.00828 16.0001C4.00828 15.8125 4.08281 15.6326 4.21546 15.4999C4.34811 15.3673 4.52803 15.2927 4.71563 15.2927H23.7561L16.4764 8.01182C16.3514 7.87773 16.2834 7.70038 16.2867 7.51713C16.2899 7.33388 16.3641 7.15904 16.4937 7.02944C16.6233 6.89984 16.7982 6.82561 16.9814 6.82238C17.1647 6.81914 17.342 6.88716 17.4761 7.01211L25.9642 15.5002C26.0967 15.6329 26.1711 15.8126 26.1711 16.0001C26.1711 16.1875 26.0967 16.3673 25.9642 16.4999Z" fill="white" />
              </svg>
            </Link>
          </div>
          <div className="visible md:w-0 mt-10 md:invisible">
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="358" height="193" viewBox="0 0 358 193" fill="none">
              <path d="M344 179C344 135.239 326.616 93.2709 295.672 62.3274C264.729 31.3839 222.761 14 179 14C135.239 14 93.2708 31.3839 62.3274 62.3274C31.3839 93.2709 14 135.239 14 179" stroke="#2E282A" stroke-width="28" stroke-linecap="round" />
            </svg>
            <svg className='relative' xmlns="http://www.w3.org/2000/svg" width="322" height="195" viewBox="0 0 322 195" fill="none">
              <path d="M15.0004 180C15.0004 146.121 25.4293 113.063 44.8704 85.3169C64.3115 57.5709 91.8224 36.4819 123.666 24.9148C155.509 13.3477 190.141 11.8633 222.858 20.6631C255.574 29.463 284.788 48.1205 306.532 74.1012" stroke="#E2725B" stroke-width="30" stroke-linecap="round" />
            </svg>
            <div className='flex-center'><p className='result'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High</p></div>
          </div>
        </div>
      </section>
      <div className="my-20 flex-center">
        <Image
          src="/Line.png"
          width={300}
          height={200}
        />
      </div>
      <section>
        <div className="flex-start m-10">
          <div className="feature-3">
            <h1>Find Doctors Near You.</h1>
            <p>Find trusted healthcare professionals in your area quickly and easily. Quality medical care is just a tap away, wherever you are. <span className="underline">Search for a doctor</span></p>
          </div>
          <div className="flex-center">
            <Image
              src="/doctor.png"
              width={156}
              height={156}
              className="mt-52 absolute"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
              <path d="M87.875 84.375C97.1948 84.375 104.75 76.8198 104.75 67.5C104.75 58.1802 97.1948 50.625 87.875 50.625C78.5552 50.625 71 58.1802 71 67.5C71 76.8198 78.5552 84.375 87.875 84.375Z" stroke="#2E282A" stroke-width="1.88625" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M87.625 16.875C59.6758 16.875 37 38.4574 37 65.0391C37 95.625 70.75 144.095 83.1426 160.836C83.657 161.543 84.3312 162.118 85.1102 162.515C85.8892 162.911 86.7509 163.118 87.625 163.118C88.4991 163.118 89.3608 162.911 90.1398 162.515C90.9188 162.118 91.593 161.543 92.1074 160.836C104.5 144.102 138.25 95.6496 138.25 65.0391C138.25 38.4574 115.574 16.875 87.625 16.875Z" stroke="#2E282A" stroke-width="1.88625" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </section>
      <div className="my-20 flex-center">
        <Image
          src="/Line.png"
          width={300}
          height={200}
        />
      </div>
    </div>
  )
}
