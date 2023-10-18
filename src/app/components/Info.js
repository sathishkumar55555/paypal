import React from 'react';
import Image from 'next/image';

export default function Info() {
  return (
  <div>
      <div className='ml-44 mt-24 flex'>
        <div className='rounded-xl'>
        <Image alt="some image" src="/info1.png"className='rounded-3xl' width="600" height="850"/>

        </div>
        <div className='p-32 mt-6'>
            <div className='font-bold text-blue-900 text-4xl'>
            Shop in the moment,<br/> pay over time
            </div>
            <div className='w-[520px] mt-6'>
            Break up the cost of everyday essentials and big-ticket items over time with the freedom of flexible payment options made for you.1,2
            </div>
            <div>
            <div className='flex mt-6'>
                        <div className='py-4'>
                        Learn about Buy Now,Pay Later
 
                        </div>
                        <div className=' py-3 ml-2'>
                            <Image alt="some image" src="/right-arrow.png" width="40" height="40"/> 
                        </div>

                    </div>
                    <div className='flex '>
                        <div className='py-4'>
                        Browse Credit Card Products and Cards
                        </div>
                        <div className='mb-4 py-3 ml-2'>
                            <Image alt="some image" src="/right-arrow.png" width="40" height="40"/> 
                        </div>

                    </div>
            </div>
            
        </div>
    </div>
    <div className='ml-24 mt-24 flex'>
        
        <div className='p-32 mt-6'>
            <div className='font-bold text-blue-900 text-4xl'>
            Cash in on double the <br/>rewards
            </div>
            <div className='w-[500px] mt-6'>
            Maximize your rewards on the things you want, need, and whatever you’ve had your eye on. Keep earning your usual credit card rewards— on top of our PayPal Rewards points—at checkout with exclusive offers in the app.3,4
            </div>
            <div>
           <div className='flex'>
           <div className='mt-6'>
           <button class="bg-blue-900 hover:bg-blue text-blue-dark font-semibold  py-2 px-4 border border-blue-900 hover:border-blue-500 
                  hover:bg-blue-500 rounded-full">
                Shop Latest Offers
              </button>

                    </div>
                    <div className='flex ml-6 mt-4 '>
                        <div className='py-4'>
                       Learn about Paypal Rewards
                        </div>
                        <div className='mb-4 py-3 ml-2'>
                            <Image alt="some image" src="/right-arrow.png" width="40" height="40"/> 
                        </div>

                    </div>
           </div>
            </div>
            
        </div>
        <div className='rounded-xl'>
        <Image alt="some image" src="/info2.png"className='rounded-3xl' width="600" height="850"/>

        </div>
    </div>
    <div className='ml-24 mt-24 flex'>
        
        <div className='p-32'>
            <div className='font-bold text-blue-900 text-4xl'>
            Send money<br/> securely at home<br/> and abroad
            </div>
            <div className='w-[450px] mt-6'>
            Time or distance shouldn’t have a say in where your money goes. Pay your share of the dinner bill or send cash to friends and family in 130+ countries—all in as little as seconds.5
            </div>
            <div>
           <div className='flex'>
          
                    <div className='flex mt-4 '>
                        <div className='py-4'>
                       Send and receive cash
                        </div>
                        <div className='mb-4 py-2 ml-2'>
                            <Image alt="some image" src="/right-arrow.png" width="40" height="40"/> 
                        </div>

                    </div>
           </div>
            </div>
            
        </div>
        <div className='rounded-xl mt-8'>
        <Image alt="some image" src="/info3.png"className='rounded-3xl' width="600" height="850"/>

        </div>
    </div>
  </div>
  )
}
