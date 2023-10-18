import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='mt-12 ml-44 w-[1200px]'>
        <div>
      <p>
      1
Pay in 4 is available to consumers upon approval for purchases of $30 to $1,500. Pay in 4 is currently not available to residents of MO or NV. Offer availability depends on the merchant and also may not be available for certain recurring, subscription services. When applying, a soft credit check may be needed, but will not affect your credit score. You must be 18 years old or older to apply. PayPal, Inc.: Loans to CA residents are made or arranged pursuant to a CA Financing Law License. GA Installment Lender Licensee, NMLS #910457. RI Small Loan Lender Licensee. NM residents: Find more disclosures related to Pay .
      </p>
      <br/>

<p>
2
Pay Monthly is subject to consumer credit approval. Fixed APR is 9.99-35.99% based on your credit. Rates as low as 4.99% may be available from time to time. Terms may vary based on purchase amount. For example, a $600 purchase can be paid at 22% APR in 6 monthly payments ($106.51/mo.; $$39.08 interest; $639.08 total of payments), 12 monthly payments ($56.16/mo.; $73.88 interest; $673.88 total of payments), or 24 monthly payments $31.13/mo; $147.05 interest; $747.05 total of payments). Payments may change based on shipping, taxes, updates to your purchase, or missed payments. Offer availability depends on the merchant and may not be available for subscriptions or recurring payments. Pay Monthly is currently not available to residents of AK, HI, MA, NV, NY or TX. You must be 18 years old or older to apply. Missed payments may have an impact on your credit score. The lender for Pay Monthly is WebBank. PayPal, Inc. (NMLS #910457): CT Small Loan Licensee. RI Loan Broker Licensee. VT Loan Solicitation Licensee. VT residents: THIS IS A LOAN SOLICITATION ONLY. PAYPAL, INC. IS NOT THE LENDER. INFORMATION RECEIVED WILL BE SHARED WITH ONE OR MORE THIRD PARTIES IN CONNECTION WITH YOUR LOAN INQUIRY. THE LENDER MAY NOT BE SUBJECT TO ALL VERMONT LENDING LAWS. THE LENDER MAY BE SUBJECT TO FEDERAL LENDING LAWS.
</p>
<br/>


<p>3
Subject to issuer's reward program terms and conditions.</p>
<br/>
<p>4
Eligible items only. Redeem points for cash back or other options. Terms and merchant exclusions apply.</p>
<br/>
<p>5
An account with PayPal is required to send and receive money.
All screen images are for illustrative purposes only.</p>
<br/>
        </div>

       <div>
      <div className='mt-24 text-sm'>
       <Image alt="some-image" src="/paypal2.png" width="200" height="200"/>
        </div>
       <div className='flex '>
       <div className='flex space-x-6 text-blue-900'>
            <a>
                Help
            </a>
            <a>
                Contact
            </a>
            <a>
                Fees
            </a>
            <a>
                Security
            </a> 
            <a>
                Apps
            </a>
            <a>
                Shop
            </a>
            <a>
                Enterprise
            </a>
            <a>
                Partners
            </a>

            
        </div>
        <div className='ml-[550px] mt-1'>
            <Image alt="some-image" src="/us.svg" width="20" height="20"/>
        </div>
       
       
       </div>
       <hr className='mx-auto bg-white mt-4'/>
      
       <div className='flex mt-4 '>
       <div className='flex space-x-4 text-blue-900'>
            <a>
                About
            </a>
            <a>
                Newsroom
            </a>
            <a>
                Jobs
            </a>
            <a>
                Investor Relations
            </a> 
            <a>
                Value in Action
            </a>
            <a>
                Public Policy
            </a>
            

            
        </div>
        <div className='ml-[180px] text-slate-400'>
        &copy;1999-2023

        </div>
        <div className='flex space-x-4 ml-4 text-blue-900'>
            <a>
                Accessibility
            </a>
            <a>
                Privacy
            </a>
            <a>
                Cookies
            </a>
            <a>
                Legal
            </a> 
            
            

            
        </div>

       
       
       </div>
       <div className='h-[100px]'>
      

       </div>
      
       </div>

    </div>
  )
}
