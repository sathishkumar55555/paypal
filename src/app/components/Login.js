import React from 'react';
import Image from 'next/image';

export default function Login() {
  return (
    <div className='w-full h-[500px] bg-blue-500 mt-32'>

<div className='ml-24 mt-24 flex'>
        
        <div className='p-36'>
            <div className='font-extrabold text-white text-4xl'>
            One login, infinite ways<br/> to pay
            </div>
            <div className='w-[450px] mt-6'>
            Securely store preferred payment methods, check out in seconds without ever entering an address or card info, and keep tabs on every payment from the palm of your hand.
            </div>
            <div>
           <ul className='flex mt-6'>
           <li className="text-white">
                  <button class="bg-blue-900 hover:bg-blue text-blue-dark font-semibold  py-2 px-4 border border-blue-900 hover:border-blue-500 
                  hover:bg-blue-500 rounded-full">
                    Get the App
                  </button>
                </li>
           <li className="text-white ml-4">
                  <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-blue-500 rounded-full">
                    Sign Up
                  </button>
                </li>
                
           </ul>
            </div>
            
        </div>
        <div className='rounded-xl mt-0'>
        <Image alt="some-image" src="/login.png"className='rounded-3xl' width="500" height="350"/>

        </div>
    </div>
    </div>
  )
}
