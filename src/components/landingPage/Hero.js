import React, {useEffect} from 'react';
import Images from '../../assets/constant/images';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {      
    useEffect(() => {
        Aos.init();
        Aos.refresh();

    }, []) 
        return (
            <div className="relative bg-background ">
        <header className="relative py-4 md:py-6">
            <div className="container px-4 mx-auto sm:px-6  lg:px-28">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                            <img className="w-auto h-8" src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg" alt="" />
                        </a>
                    </div>
                    {/*show hamburger on small screen */}
                    <div className="flex lg:hidden">
                        <button type="button" className="text-gray-900">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                      {/* Navbar items  */}
                    <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                        <a href="#" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>
    
                        <a href="#" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </a>
    
                        <a href="#" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Blog </a>
    
                        <a href="#" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Market </a>
                    </div>
    
                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">

    
                        <a href="#" title="" className="px-5 py-2 text-base font-poppins font-bold leading-7 text-white transition-all duration-200 bg-buttonPrimary border border-transparent rounded-xl hover:bg-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    
        <section className="relative py-12 sm:py-16  lg:py-20 lg:pb-36">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:grid-cols-2 gap-y-12 lg:gap-x-8">
        
        {/* Text Section */}
        <div data-aos="fade-up">
        <div>
            <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-wide leading-tight lg:tracking-normal
             text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl lg:font-extrabold font-sans">
                We Buy Crypto & Gift Cards <span className="text-primary">Instantly!</span>
            </h1>
            <p className="mt-2 text-base text-gray-600 sm:mt-8 font-poppins">
                Buy & Sell Crypto and Gift Cards with Ease – Fast, Secure, and Reliable Transactions Anytime
            </p>

            <form action="#" method="POST" className="mt-8 sm:mt-10">
                <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                <input
                    type="email"
                    placeholder="Enter your email to stay updated on our latest offers!"
                    className="block w-full font-poppins px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-600 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                    required
                />
                <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                    <button
                    type="submit"
                    className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-buttonPrimary rounded-lg focus:outline-none focus:bg-bg-buttonPrimary font-poppins hover:bg-gray-900"
                    >
                    Get Offers
                    </button>
                </div>
                </div>
            </form>
            </div>

            <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
            <div className="flex items-center">
                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-poppins">2943</p>
                <p className="ml-3 text-sm text-gray-900 font-poppins">Active
                     <br />Customers</p>
            </div>

            <div className="hidden sm:block">
                <svg
                className="text-gray-400"
                width="16"
                height="39"
                viewBox="0 0 16 39"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                >
                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                </svg>
            </div>

            <div className="flex items-center">
                <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-poppins">₦1M+</p>
                <p className="ml-3 text-sm text-gray-900 font-poppins">
                Transaction
                <br />
                Completed
                </p>
            </div>
            </div>
        </div>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left">
        <div className="relative flex justify-center items-center">
      
        <img
            className="
                w-full  sm:max-w-md md:max-w-lg lg:max-w-[30rem]
                ml-auto mr-auto lg:ml-[20rem] md:ml-[21rem]
                sm:mt-[-10%] md:mt-[-5%] lg:mt-[-8.5rem]
                object-cover"
            src={Images.happyWoman}
            alt="Happy Woman"
            />
          

             {/* Coin Images */}
            <div className="absolute w-full h-full">
                {/* blueryCoin */}
                <img
                    src={Images.blueryCoin}
                    alt="blueryCoin"
                    className="
                        w-20 h-20 absolute top-[6%] left-[10%]
                         sm:top-[6%] sm:left-[40%] md:top-[12%] md:left-[20%] 
                         lg:top-[13%] lg:left-[30%] " 
                    />

                {/* ethCoin */}
                <img
                src={Images.ethCoin}
                alt="ethCoin"
                className="
                w-20 h-20 absolute
                top-[16%] left-[75%]               
                sm:top-[15%] sm:left-[55%]         
                md:top-[12%] md:left-[90%]         
                lg:top-[-2%] lg:left-[88%]"
                />
               
                <img
                src={Images.yuanCoin}
                alt="yuanCoin"
                className="w-20 h-20 absolute 
                top-[68%] left-[8%]
                sm:top-[15%] sm:left-[55%]         
                md:top-[56%] md:left-[20%]         
                lg:top-[56%] lg:left-[30%]"
                />
            </div>
        </div>
        </div>

        </div>
    </div>
</section>

    </div>
    
        )
};

export default Hero;