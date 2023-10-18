"use client";
import React from 'react';
import { useState } from 'react'
import { Tab } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Hero() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],

  })
  return (
    <div className='flex mt-16'>
      <div className='ml-48'>
        <div className="w-full text-blue-900 max-w-xs px-2 py-16 font-bold text-lg sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-full font-bold bg-blue-500 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-full py-2.5 text-sm font-medium leading-5 ',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none justify-between focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : ' hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <div className=' max-w-xl text-blue-950'>
          <h1 className='text-7xl font-bold'>
            Trust the way you pay.
          </h1>
          <h3 className='max-w-lg mt-6'>
            Unlock a smart way to pay. Make secure payments, earn cash back rewards, and send money almost anywhere in the world—all in one place.
          </h3>
        </div>
        <div>
          <ul className="flex space-x-4 mt-8">


            <li className="text-white">
              <button class="bg-blue-900 hover:bg-blue text-blue-dark font-semibold  py-2 px-4 border border-blue-900 hover:border-blue-500 
                  hover:bg-blue-500 rounded-full">
                Get the App
              </button>
            </li>
            <li className="text-blue-900">
              <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-blue-500 py-2 px-4 border border-blue-900 hover:border-blue-500 rounded-full">
                Sign Up
              </button>
            </li>

          </ul>
        </div>



      </div>
      <div className='ml-32 rectangle'>
        <Image alt="some-image" src="/paypalmobile.png" width="500" height="100" />

      </div>
      <hr className="mx-auto" />
    </div>
  )

}
