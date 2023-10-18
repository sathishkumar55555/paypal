import React from 'react';
import Image from 'next/image';

export default function Picture() {
    return (
        <div className='bg-blue-500 ml-44 mt-32 w-[1200px] rounded-3xl h-[500px]'>
            <div className='flex'>
                <div className='ml-16 py-20 w-1/3'>
                    <div className='text-5xl font-extrabold '>
                    Security that's<br/> always on
                    </div>
                    <div className='py-8'>
                    Pay with peace of mind knowing we keep your financial details, payments, and eligible purchases protected. Access stronger login security, early fraud detection, and real-time alerts for added protection.
                    </div>
                    <div className='flex '>
                        <div className='py-4'>
                        Learn about PayPal security
 
                        </div>
                        <div className='mb-4 py-3 ml-2'>
                            <Image alt="some-image" src="/right-arrow.png" width="40" height="40"/>
                        </div>

                    </div>
                </div>
                <div className='mt-12 ml-32'>
                <Image alt="some-image" src="/payment.png" width="600" height="600"/>
            </div>
            </div>
            
           
        </div>
    )
}
