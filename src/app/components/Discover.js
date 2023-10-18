import React from 'react';
import Image from 'next/image';

export default function Discover() {
  return (
    <div className='mt-12 ml-60'>
        <div className='text-5xl text-blue-900 font-extrabold'>
        Discover even more<br/> ways to PayPal
        </div>
        <div className='mt-24'>
           <div className='flex'>
           <div className='flex bg-[#111] p-6 rounded-2xl'>
                <div>
                    <Image alt="discover" src="/discover.svg" width="50" height="60"/>
                    
                </div>
                <div className='ml-6 mt-4 text-lg font-semibold text-blue-900'>
                    Download the App
                </div>
                <div className='mt-3 ml-44'>
                <Image alt="discover" src="/right-arrow.png" width="40" height="40"/>
                </div>
                <div className='w-6'>

                </div>
            </div>
            <div className='flex bg-[#111] p-6 rounded-2xl ml-12 px-4'>
                <div>
                    <Image alt="discover" src="/discover2.svg" width="50" height="60"/>
                    
                </div>
                <div className='ml-6 mt-4 text-lg font-semibold text-blue-900'>
                    Explore Crypto
                </div>
                <div className='mt-3 ml-56'>
                <Image alt="discover" src="/right-arrow.png" width="40" height="40"/>
                </div>
                <div className='w-6'>

                </div>
            </div>
           </div>
           <div className='flex mt-12'>
           <div className='flex bg-[#111] p-6 rounded-2xl'>
                <div>
                    <Image alt="discover" src="/discover3.svg" width="50" height="60"/>
                    
                </div>
                <div className='ml-6 mt-4 text-lg font-semibold text-blue-900'>
                    Start Selling
                </div>
                <div className='mt-3 ml-56'>
                <Image alt="discover" src="/right-arrow.png" width="40" height="40"/>
                </div>
                <div className='w-8'>

                </div>
            </div>
            <div className='flex bg-[#111] p-6 rounded-2xl ml-12 px-4'>
                <div>
                    <Image alt="discover" src="/discover2.svg" width="50" height="60"/>
                    
                </div>
                <div className='ml-6 mt-4 text-lg font-semibold text-blue-900'>
                    Learn How Paypal works
                </div>
                <div className='mt-3 ml-[147px]'>
                <Image alt="discover" src="/right-arrow.png" width="40" height="40"/>
                </div>
                <div className='w-6'>

                </div>
            </div>
           </div>
        </div>
    </div>
  )
}
