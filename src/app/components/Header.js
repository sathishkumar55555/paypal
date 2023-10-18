"use client";
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Paypal</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full  shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex  justify-self-center mt-2">
                <Image src="/paypal.png" width="50" height="50" />
                <h2 className="text-2xl text-white font-bold items-center mt-2 ml-6">
                  Paypal
                </h2>
                <div className=" items-center mb-42 mt-1 ml-2 text-xl text-right">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2  font-medium text-white hover:bg-opacity-30 focus:outline-none 
                      text-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        Personal
                        <ChevronDownIcon
                          className="ml-2 mt-1 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
                <div className=" items-center mb-42 mt-1 ml-2 text-xl text-right">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button
                        className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2  font-medium text-white hover:bg-opacity-30 focus:outline-none 
                      text-xl focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        Business
                        <ChevronDownIcon
                          className="ml-2 mt-1 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
                <h2 className="text-xl text-white items-center mt-3 ml-2">
                  Developer
                </h2>
              </div>
              <div></div>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 text-xl mt-1 md:space-y-0">
                <li className="text-white text-xl">
                  <Link href="/">Help</Link>
                </li>
                <li className="text-blue-900">
                  <button class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-blue-500 py-2 px-4 border border-blue-900 hover:border-blue-500 rounded-full">
                    Log In
                  </button>
                </li>
                <li className="text-white">
                  <button class="bg-blue-900 hover:bg-blue text-blue-dark font-semibold  py-2 px-4 border border-blue-900 hover:border-blue-500 
                  hover:bg-blue-500 rounded-full">
                    Sign Up
                  </button>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className="mx-auto" />
    </div>
  );
}
