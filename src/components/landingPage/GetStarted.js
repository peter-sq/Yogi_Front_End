import {React} from 'react'
import { useNavigate } from 'react-router-dom';
import Images from '../../assets/constant/images'
import WhatsAppButton from '../WhatsappButton.js';

const GetStarted = () => {
    const handleWhatsAppClick = () => {
        window.open("https://api.whatsapp.com/send/?phone=+2349056118474&text=y", "_blank");
      };

       const navigate = useNavigate();

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
    <div className='flex flex-col md:flex-row px-6 py-8 md:px-14 md:py-14 lg:px-28 gap-y-8 md:gap-y-0 md:gap-x-16 lg:gap-x-60'>
    <div className='flex-none'>
        <div className='bg-feature border-6 px-8 py-12 rounded-[2rem]'>
            <img className='w-full md:w-[25rem] md:h-[35rem]' src={Images.mobilephone} alt='Mobile phone' />
        </div>
        <div className='relative -top-20 md:-top-32 md:left-60'>
            <img className='h-[10rem] md:h-[13rem] md:w-[70%] w-[55%]' src={Images.graphychat} alt='Graphy chat' />
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
           <div className='flex flex-row gap-4 py-6 px-6'>
            <button onClick={handleWhatsAppClick} aria-label="Get started with Yogi" className='w-full md:w-auto px-6 h-12 text-white bg-blue-600 hover:bg-white hover:text-primary border rounded-lg font-poppins text-lg transition-all duration-300'>Get Started</button>
            <button onClick={() => navigate('./all-crypto')} aria-label="View pricing options" className='w-full md:w-auto px-6 h-12 text-primary bg-white hover:text-white hover:bg-blue-600 border rounded-lg font-poppins text-lg transition-all duration-300'>View Pricing</button>
         
            </div>
            <WhatsAppButton />

        </div>
    </div>
    </div>


    </div>
  )
}

export default GetStarted
