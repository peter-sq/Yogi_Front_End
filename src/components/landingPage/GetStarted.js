import React from 'react'
import Images from '../../assets/constant/images'

const GetStarted = () => {
  return (
    <div className='bg-background py-12'>
    <div className='text-center max-w-screen-xl mx-auto '>
      <h4 className='font-poppins text-center text-primary text-lg
      font-bold'>
          02  —  08
      </h4>
      <p className='py-4 font-sans font-extrabold text-center 
     text-3xl tracking-normal leading-16 text-gray-900'>
          Get Started with Yogi, <br/>In 3 Easy Steps</p>
    </div>
    <div className='flex flex-col md:flex-row px-6 py-8 md:px-14 md:py-14 lg:px-28 gap-y-8 md:gap-y-0 md:gap-x-16 lg:gap-x-40'>
    <div className='flex-none'>
        <div className='bg-feature border-6 px-8 py-12 rounded-[2rem]'>
            <img className='w-48 md:w-64' src={Images.mobilephone} alt='Mobile phone' />
        </div>
        <div className='relative -top-20 md:-top-32 md:left-40'>
            <img className='h-20 md:h-[10rem] w-auto' src={Images.graphychat} alt='Graphy chat' />
        </div>
    </div>
    <div className='flex-1'>
        <div className='flex flex-col'>
            {[
                {
                    imgSrc: Images.group,
                    imgAlt: 'Group',
                    title: '1. Download The App',
                    description: 'The Brewer app is available on the App Store and Play Store for easy download.',
                },
                {
                    imgSrc: Images.wallet,
                    imgAlt: 'Wallet',
                    title: '2. Create Your Wallet',
                    description: 'Create your Yogi wallet with the fastest flow and the simplest layout.',
                },
                {
                    imgSrc: Images.btcc,
                    imgAlt: 'BTC',
                    title: '3. Conduct Crypto Transactions',
                    description: 'Conduct speedy crypto transactions using the Breew app today.',
                },
                {
                    imgSrc: Images.wallet,
                    imgAlt: 'Wallet',
                    title: '4. Secure Your Wallet',
                    description: 'Ensure your transactions are secure with our state-of-the-art security features.',
                },
            ].map((step, index) => (
                <div key={index} className='flex py-4 md:py-6'>
                    <div className='flex-none px-2 md:px-4'>
                        <img className='w-8 md:w-12' src={step.imgSrc} alt={step.imgAlt} />
                    </div>
                    <div className='flex-1'>
                        <p className='font-poppins text-base md:text-lg font-bold'>{step.title}</p>
                        <div className='font-sans text-sm text-gray-500 max-w-full md:max-w-[17rem]'>
                            {step.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>


    </div>
  )
}

export default GetStarted
