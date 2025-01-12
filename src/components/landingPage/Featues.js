import React from 'react'
import Images from '../../assets/constant/images';

const Featues = () => {
  return (
    <div className='bg-feature py-12'>
      <div className='text-center max-w-screen-xl mx-auto '>
        <h4 className='font-poppins text-center text-primary text-lg
        font-bold'>
            01  —  08
        </h4>
        <p className='py-4 font-sans font-extrabold text-center 
       text-3xl tracking-normal leading-16 text-gray-900'>
            Full Featured to buy, <br/>trade and invest in crypto</p>
      </div>
      <div className='flex flex-col px-28'>
        <div className='flex '>
            <div className='flex-none w-[40rem] h-auto py-16 px-4 bg-white rounded '>
               <div className='grid grid-cols-2 gap-4'>
                <div className='grid grid-row-2'>
                    <div className='pb-4'>
                    <img className='w-12 h-12' src={Images.btc} alt='btc-image'/>
                    </div>
                    <div className='text-start '>
                        <h2 className='font-sans text-lg text-start text-gray-900 leading-8 tracking-normal'>
                            Buy 100+ crypto assets </h2>
                        <p className='text-sm max-w-[14rem] text-gray-800 font-poppins'>
                            pick from a variety of crypto assets to buy, hold, stake and sell</p>
                    </div>
                  
                </div>
                <div className=''>
                    22
                </div>

               </div>
            </div>
            <div className='flex-initial w-16 bg-black rounded '>
                2
            </div>
        </div>
        <div className=''>3</div>
        
      </div>
    </div>
  )
}

export default Featues
