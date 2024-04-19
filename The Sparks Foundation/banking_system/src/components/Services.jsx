import React from "react";
import businessImg from "../assets/businessImg.svg";
import creditImg from "../assets/creditCardImg.svg";
import incomeImg from "../assets/incomeImg.svg";
import insuranceImg from "../assets/InsuranceImg.svg";
import onlineImg from "../assets/onlineShopImg.svg";
import financialImg from "../assets/FinancialImg.svg";
import bgServicesImg from "../assets/img10.webp";
const Services = () => {
  return (
    <div
      className="px-20 bg-cover"
      style={{ backgroundImage: `url(${bgServicesImg})` }}
    >
      <h1 className="text-4xl font-bold text-center py-14">Our Services</h1>
      <div className="grid grid-cols-3 gap-6 py-10">
        <div className="flex flex-col items-center gap-2 bg-black bg-opacity-70 p-4 text-white rounded-md">
          <img className="w-20" src={businessImg} alt="" />
          <h3 className="text-xl font-bold">Business Consulting</h3>
          <p className="text-sm">
            Our business consulting services offer tailored solutions to enhance
            your operations, improve efficiency, and drive growth. From
            strategic planning to market analysis, we provide the expertise you
            need to succeed.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-black bg-opacity-70 p-4 text-white rounded-md">
          <img className="w-20" src={creditImg} alt="" />
          <h3 className="text-xl font-bold">Credit/ Debit Card</h3>
          <p className="text-sm">
            Choose from a range of credit card options designed to suit your
            lifestyle and financial goals. Enjoy perks such as rewards programs,
            travel benefits, and competitive interest rates.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-black bg-opacity-70 p-4 text-white rounded-md">
          <img className="w-20" src={incomeImg} alt="" />
          <h3 className="text-xl font-bold">Icome Monitoring</h3>
          <p className="text-sm">
            Our income monitoring services help you track your earnings and
            expenses, enabling better financial decision-making. Stay informed
            and in control of your finances with our intuitive tools.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-black bg-opacity-70 p-4 text-white rounded-md">
          <img className="w-20" src={insuranceImg} alt="" />
          <h3 className="text-xl font-bold">Insurance Consulting</h3>
          <p className="text-sm">
            Get expert advice on insurance products that best suit your needs.
            Whether it's life, health, or property insurance, we're here to
            guide you through the options and find the right coverage for you.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-black bg-opacity-70 p-4 text-white rounded-md">
          <img className="w-20" src={onlineImg} alt="" />
          <h3 className="text-xl font-bold">Financial Investment</h3>
          <p className="text-sm">
            Explore a variety of investment opportunities to grow your wealth
            and secure your financial future. Our investment advisors can help
            you make informed decisions based on your risk tolerance and
            financial goals.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 bg-black bg-opacity-70 p-4 text-white rounded-md">
          <img className="w-20" src={financialImg} alt="" />
          <h3 className="text-xl font-bold">Finanical Management</h3>
          <p className="text-sm">
            Our financial management services are designed to simplify your
            finances and help you achieve your goals. From budgeting and savings
            plans to retirement planning, we're here to support you every step
            of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
