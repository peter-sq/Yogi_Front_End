import React from 'react'
import Images from '../../assets/constant/images';
import { items } from '../../assets/constant/datas/data';
import useAOS from '../../assets/constant/hooks/useAos';

const Featues = () => {
  useAOS(1000)
  return (
   
    <div className=' bg-feature py-12'>
       <div data-aos="fade-up">
      <div className='text-center max-w-screen-xl mx-auto '>
        <h4 className='font-poppins text-center text-primary text-lg
        font-bold'>
            01  —  08
        </h4>
        <p className='py-4 font-sans font-extrabold text-center 
       text-3xl tracking-normal leading-16 text-gray-900'>
            Full Featured to buy, <br/>trade and invest in crypto</p>
      </div>
      </div>
      <div data-aos="fade-up">
   <div className='flex flex-col px-4 md:px-10 lg:px-28'>
  <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10'>
    <div className='flex-none w-full md:w-[65%] h-auto pt-8 px-6 md:px-12 bg-white rounded-2xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <div className='flex items-center'>
            <img className='w-12 h-12' src={Images.btc} alt='btc' />
          </div>
          <div className='text-start'>
            <h2 className='text-[1.2rem] font-bold text-gray-900 leading-8 tracking-wide'>
              Buy 100+ Crypto Assets
            </h2>
            <p className='text-sm  text-gray-800'>
              {items[0].description}
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={Images.phoneh} className='w-3/4 md:w-full' alt='Phone illustration' />
        </div>
      </div>
    </div>
    <div className='w-full md:w-[35%] bg-white rounded-2xl p-8'>
      <div className='space-y-4'>
        <div className='flex items-center'>
          <img className='w-12 h-12' src={Images.wallet} alt='wallet' />
        </div>
        <div className='text-start'>
          <h2 className='text-[1.2rem] font-bold text-gray-900 leading-8 tracking-wide'>
           Secure Wallet
          </h2>
          <p className='text-sm  text-gray-800'>
            Your Crypto Assets are Protected by the Latest Security Measures.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-[2.2rem]'>
    {items.map((item, index) => (
      <div key={index} className='bg-white rounded-2xl p-8'>
        <div className='space-y-4'>
          <div className='flex items-start lg:items-center '>
            <img className='w-12 h-12' src={item.image} alt={item.title} />
          </div>
          <div className='text-start'>
            <h2 className='text-[1.2rem] font-bold text-gray-900 leading-8 tracking-wide'>
              {item.title}
            </h2>
            <p className='text-sm  text-gray-800'>
              {item.description}
            </p>
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

export default Featues
