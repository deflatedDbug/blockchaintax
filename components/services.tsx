import React from "react";

export default function Services() {
  return (
    <section id="services" className="bg-[#28282B] text-white py-20">
      <header className="mb-10 ">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-8">
          SMALL BUSINESS SERVICES
        </h1>
        {/* Single grid container for all services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-screen-xl mx-auto px-5 text-xl">
          {/* Service 1 */}
          <div className="border bg-white text-gray-600 p-6 rounded-lg shadow-md duration-300 md:hover:scale-110">
            <h2 className="font-bold text-xl mb-4 text-center underline">Tax E-Filing</h2>
           
              <span className="font-bold">Taxes:</span> Personal, Business,
              Corporate, and Trust
            
            <br />
              <span className="font-bold">Specialty: </span>Filing Crypto
              Transactions (airdrops, conversions, rewards, swaps, transfers, NFTs)
          
          </div>
          {/* Service 2 */}
          <div className="border bg-white text-gray-600 p-6 rounded-lg shadow-md duration-300 md:hover:scale-110">
            <h2 className="font-bold text-xl mb-4 text-center underline">Management</h2>
            
              <span className="font-bold">Tax Planning:</span> How to Report and Save on Taxes
            
            <br />
              <span className="font-bold"> Tax Resolution:</span> OIC,
              Delinquent Tax Returns, Innocent Spouse Relief, IRS Appeals and
              Penalty Abatement
            
            <br />
              <span className="font-bold"> IRA Planning: </span> The Bucket Plan
              (Jason L. Smith), In Collaboration with Infinity Wealth Management
            
          </div>

          {/* Service 3 */}
          <div className="border bg-white text-gray-600 p-6 rounded-lg shadow-md duration-300 md:hover:scale-110">
            <h2 className="font-bold text-xl mb-4 text-center underline">Advisory</h2>
            
              <span className="font-bold"> Tax Consulting:</span> How to grow
              your Tax Free Assets (Crypto Related Retirement Accounts)
            <br />
            
              <span className="font-bold">Expertise:</span> Income tax return, Tax
              Service, Crypto Tax
            
          </div>
        </div>
      </header>
    </section>
  );
}
