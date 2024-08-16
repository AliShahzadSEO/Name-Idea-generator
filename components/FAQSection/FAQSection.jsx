"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const FAQSection = ({Q1,Q2,Q3,Q4,Q5,A1,A2,A3,A4,A5}) => {
  const [One, setOne] = useState(false);
  const [Two, setTwo] = useState(false);
  const [Three, setThree] = useState(false);
  const [Four, setFour] = useState(false);
  const [Five, setFive] = useState(false);
  return (
    <div>
      <div className="w-[80%] mx-auto text-[#343a40] py-[30px]">
        <div>
          <p className="sm:text-[36px] text-[24px] text-center sm:font-normal font-semibold">
            Frequently Asked Questions - Got More Questions on Your Mind
          </p>
        </div>
        <div className="py-[30px] mt-[20px] bg-gray-200 px-[30px] rounded-[10px] flex flex-col gap-4">
          {/* Question no 1 */}
          <div>
            <div
              className="flex justify-between gap-2 sm:gap-0 items-center cursor-pointer"
              onClick={() => {
                setOne(!One);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(false);
              }}
            >
              <p className="sm:text-[24px] text-[18px] font-semibold sm:font-normal">
                {Q1}
              </p>
              <div className="bg-gray-300 rounded-full cursor-pointer">
                {!One ? (
                  <RiArrowDropDownLine className="text-[28px]" />
                ) : (
                  <RiArrowDropUpLine className="text-[28px]" />
                )}
              </div>
            </div>
            <p
              className="pt-[10px] overflow-hidden"
              id={!One ? "open" : "close"}
            >
             {A1}
            </p>
          </div>
          <div className="bg-gray-400 h-[1px]"></div>
          {/* Question no 2 */}
          <div>
            <div className="flex justify-between items-center cursor-pointer gap-2 sm:gap-0"
            onClick={() => {
                setOne(false);
                setTwo(!Two);
                setThree(false);
                setFour(false);
                setFive(false);
              }}>
              <p className="sm:text-[24px] text-[18px] font-semibold sm:font-medium">
                {Q2}
              </p>
              <div
                className="bg-gray-300 rounded-full cursor-pointer"
                
              >
                {!Two ? (
                  <RiArrowDropDownLine className="text-[28px]" />
                ) : (
                  <RiArrowDropUpLine className="text-[28px]" />
                )}
              </div>
            </div>
            <p
              className="pt-[10px] overflow-hidden"
              id={!Two ? "open" : "close"}
            >
             {A2}
            </p>
          </div>
          <div className="bg-gray-400 h-[1px]"></div>
          {/* Question no 3 */}
          <div>
            <div className="flex justify-between items-center cursor-pointer gap-2 sm:gap-0"
            onClick={() => {
                setOne(false);
                setTwo(false);
                setThree(!Three);
                setFour(false);
                setFive(false);
              }}>
              <p className="sm:text-[24px] text-[18px] font-semibold sm:font-medium">
                {Q3}
              </p>
              <div
                className="bg-gray-300 rounded-full cursor-pointer"
              >
                {!Three ? (
                  <RiArrowDropDownLine className="text-[28px]" />
                ) : (
                  <RiArrowDropUpLine className="text-[28px]" />
                )}
              </div>
            </div>
            <p
              className="pt-[10px] overflow-hidden"
              id={!Three ? "open" : "close"}
            >
              {A3}
            </p>
          </div>
          <div className="bg-gray-400 h-[1px]"></div>
          {/* Question no 4 */}
          <div>
            <div className="flex justify-between items-center cursor-pointer gap-2 sm:gap-0"
            onClick={() => {
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(!Four);
                setFive(false);
              }}>
              <p className="sm:text-[24px] text-[18px] font-semibold sm:font-medium">
                {Q4}
              </p>
              <div
                className="bg-gray-300 rounded-full cursor-pointer"
                onClick={() => setFour(!Four)}
              >
                {!Four ? (
                  <RiArrowDropDownLine className="text-[28px]" />
                ) : (
                  <RiArrowDropUpLine className="text-[28px]" />
                )}
              </div>
            </div>
            <p
              className="pt-[10px] overflow-hidden"
              id={!Four ? "open" : "close"}
            >
             {A4}
            </p>
          </div>
          <div className="bg-gray-400 h-[1px]"></div>
          {/* Question no 5 */}
          <div>
            <div className="flex justify-between items-center cursor-pointer gap-2 sm:gap-0"
            onClick={() => {
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(false);
                setFive(!Five);
              }}>
              <p className="sm:text-[24px] text-[18px] font-semibold sm:font-medium">
                {Q5}
              </p>
              <div
                className="bg-gray-300 rounded-full cursor-pointer"
                onClick={() => setFive(!Five)}
              >
                {!Five ? (
                  <RiArrowDropDownLine className="text-[28px]" />
                ) : (
                  <RiArrowDropUpLine className="text-[28px]" />
                )}
              </div>
            </div>
            <p
              className="pt-[10px] overflow-hidden"
              id={!Five ? "open" : "close"}
            >
            {A5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
