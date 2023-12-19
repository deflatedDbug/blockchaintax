import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="bg-[#28282B] text-white py-20">
      <header className="font-semibold text-3xl text-center mb-10">
        Small Business Services
      </header>
      <div className="flex flex-row justify-around">
        <div className="">
        <Image 
        src="/tax.png"
        width={100}
        height={100} 
        alt="Tax E-Filing Icon"
        className="pb-8"
        />
          <h3 className="mb-2 underline text-xl">Tax E-Filing</h3>
          <p className="max-w-sm mx-auto">
          <span className="font-semibold"> * Taxes: </span> Personal, Business, Corporate, and Trust, <br /> <span className="font-semibold">*
            Specialize in reporting crypto transactions </span> (airdrop, convert,
            reward, swap, transfer, NFT)
          </p>
        </div>
        <div className="">
        <Image 
        src="/manager.png"
        width={100}
        height={100} 
        alt="Tax E-Filing Icon"
        className="pb-8"
        />
          <h3 className="mb-2 underline text-xl">Management</h3>
          <p className="max-w-sm mx-auto pb-4">
          <span className="font-semibold"> * Tax Planning: </span> Reporting and advice to saving <br />
          <span className="font-semibold">* Tax Resolution: </span> OIC, delinquent tax returns, innocent spouse
            relief. IRS appeals and penalty abatement <br /> <span className="font-semibold">* IRA Planning: </span> The
            Bucket Plan (Jason L. Smith), In Collaboration with infinity Wealth
            Management
          </p>
        </div>
        <div className="">
        <Image 
        src="/advisor.png"
        width={100}
        height={100} 
        alt="Tax E-Filing Icon"
        className="pb-8"
        />
          <h3 className="mb-2 underline text-xl">Advisory</h3>
          <p className="max-w-sm mx-auto">
            <span className="font-semibold">* Tax Consulting:</span> Advice to grow your tax free assets (Crypto
            Related Retirement Accounts) <span className="font-semibold">income tax return, Tax Service, Crypto
            Tах </span>
          </p>
        </div>
      </div>
    </section>
  );
}
