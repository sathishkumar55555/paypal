import React from "react";
import Image from "next/image";

export default function MoneyHub() {
  const data = [
    {
        id:1,
      img: "/hub1.png",
      mode: "Payments",
      message: "Sending money to abroad? What do know about international...",
      author: "Paypal Editorial Staff",
      date: "July 24",
      type: "Article",
    },
    {
        id:2,
      img: "/hub2.png",
      mode: "Money Management",
      message: "Using apps to transfer money from different banks ",
      author: "Paypal Editorial Staff",
      date: "July 24",
      type: "Article",
    },
    {
        id:3,
      img: "/hub3.png",
      mode: "Shopping",
      message: "Using buy now,pay later when shopping for clothes",
      author: "Paypal Editorial Staff",
      date: "July 03",
      type: "Article",
    },
  ];
  return (
    <div className="ml-44 mt-16">
      <div>
        <div className="text-4xl font-extrabold  text-blue-900">
          Explore the PayPal Money Hub
        </div>
        <div className="mt-4">
          Find helpful articles, tips, and stories from people like you who are
          exercising their financial know-
          <br />
          how to make every dollar go further.
        </div>
      </div>
      <div className="mt-12 -ml-[30px] flex">
        {data.map((d) => (
          
          <div className="h-[600px] ml-8 w-[400px] rounded-3xl text-blue-900  hover:border hover:border-blue-500" key={d.id}>
            <div className="object-contain" >
              <Image
              alt="some-image"
                className="rounded-t-3xl"
                src={d.img}
                width="400"
                height="200"
              />
            </div>
            <div className="p-8">
              <div className="flex ">
                <div className="">{d.mode}</div>
                <div class="inline-block h-[25px] min-h-[1em] w-0.5 self-stretch bg-slate-600 opacity-100 dark:opacity-50 mt-0 ml-2"></div>
              </div>
              <div className="text-2xl font-bold mt-6 w-[300px]">
                {d.message}
              </div>
              <div className="mt-6">
                Author: {d.author}
              </div>
              <div className="flex mt-6">
                <div>
                    {d.date}

                </div>
                <div class="inline-block h-[20px] min-h-[1em] w-0.5 self-stretch bg-slate-600 opacity-100 dark:opacity-50 mt-1 ml-2"></div>
                <div className="ml-2">
                {d.type}
              </div >
              </div>
             
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
