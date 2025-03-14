import React from 'react'

const Header = () => {
    const handleWhatsAppClick = () => {
        window.open("https://api.whatsapp.com/send/?phone=+2349056118474&text=y", "_blank");
      };
  return (
        <header className="relative py-4 md:py-6">
            <div className="container px-4 mx-auto sm:px-6  lg:px-28">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                       <p className='text-2xl font-bold text-primary font-poppins'>YogiXChange</p>
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
                        <a href="/" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>
    
                        <a href="#" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </a>
    
                        <a href="#" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Blog </a>
    
                        <a href="/all-crypto" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Market </a>

                        <a href="#" title="" className="text-base font-poppins font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Calculator </a>
                    </div>
    
                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                        <a onClick={handleWhatsAppClick}  title="" className="px-5 py-2 text-base font-poppins font-bold leading-7 text-white transition-all duration-200 bg-buttonPrimary border border-transparent rounded-xl hover:bg-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    
  )
}

export default Header
