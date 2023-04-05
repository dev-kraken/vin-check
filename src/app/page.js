/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Search from "../../components/Search";
import SearchedData from "../../components/SearchedData";
import ArrowIcon from "../assets/images/arrow.png";
import vinBanner from "../assets/images/vin-stamped-areas.jpg";
import vinDecoder from "../assets/images/VIN-Decoder.avif";
import whtisVin from "../assets/images/wht_is_vin.jpg";

export default function Page() {
  const [vinData, setVinData] = useState(null);
  return (
    <main>
      <section className="bg-[#BFDCE5] flex items-center justify-center">
        {/* Main Content */}
        <div className="w-2/3 pt-24 pb-8 md:w-w-4/5 md:px-6 sm:w-full sm:px3">
          {/* Heading and Arrow Icon */}
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-6xl font-semibold  text-[#3E54AC] sm:text-5xl">
              VIN Decoder & Lookup
            </h1>
            <p className="text-[#3E54AC] text-center font-normal text-lg mt-8 mb-5">
              Check Your Vehicle Identification Number for Free
            </p>
            {/* Arrow Icons */}
            <div className="flex justify-center my-5">
              <Image
                className="ml-2 -scale-y-100"
                src={ArrowIcon}
                alt="Arrow"
                placeholder="blur"
              ></Image>
            </div>
          </div>
          {/* Search Form for Vin Number Check */}
          <div className="w-2/5 mx-auto xl:w-2/3 md:w-full lg:w-full sm:w-full">
            <Search setVinData={setVinData} />
            {/* Label Info Offical Data From */}
            <ul className="flex items-center justify-center my-6">
              <li className="flex items-center text-[#3E54AC]">
                <CheckBadgeIcon className="W-6 h-6  me-2 text-green-600" />
                Official data from NHTSA
              </li>
            </ul>
          </div>
        </div>
        {/* Main Content Ended... */}
      </section>
      {/* Searched Vin Result */}
      
      
      <section>
        <div className="w-1/2 mx-auto lg:w-11/12 sm:w-full mt-4 p-2">
          {vinData && <SearchedData vinData={vinData} />}
        </div>
      </section>


      {/*  Before Resilt*/}
      <section className="sm:p-3 lg:p-3 xl:p-3">
        <div className="w-4/6 xl:w-full mx-auto lg:w-full sm:w-full">
          <div className="flex items-center lg:block sm:block xl:block">
            <div className="w-[38%] lg:w-full sm:w-full xl:w-full">
              <h1 className="text-2xl my-6 font-semibold text-[#3E54AC]">
                How to Find the Vehicle's VIN Number
              </h1>
              <p className="text-base leading-8	">
                {" "}
                1. Check the dashboard: The vehicle identification number (VIN)
                is typically located on the driver's side of the dashboard,
                visible through the windshield. It may also be located on a
                sticker inside the driver's side doorjamb or on the frame of the
                car near the hood.
                <br />
                2. Check paperwork: The VIN may also be found on documents
                related to your vehicle, such as registration, title, insurance
                card, or maintenance records.
                <br />
                3. Check under the hood: The VIN may be stamped onto a metal
                plate or printed on a sticker and affixed to various parts of
                your vehicle, such as the engine block or firewall.
              </p>
            </div>
            <Image src={vinBanner} alt="vinCheck" />
          </div>

          <div className="flex items-center my-14 sm:block">
            <Image className="w-1/3 sm:w-full" src={whtisVin} alt="vinCheck" placeholder="blur" />
            <div>
              <h1 className="text-2xl mb-3 font-semibold text-[#3E54AC]">
                What is a VIN Number (Vehicle Identification Number)?
              </h1>
              <p className="text-base leading-8	">
                {" "}
                A Vehicle Identification Number (VIN) is a unique 17-digit code
                used to identify a specific vehicle. It is composed of numbers
                and letters that provide information about the vehicle, such as
                the make, model, year, engine size, and other features. The VIN
                can also be used to track a vehicle's history, such as its
                ownership and service records.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6 p-3">
        <div className="w-4/6 mx-auto lg:w-11/12 sm:w-full border border-dashed border-[#3E54AC] p-8 rounded-2xl">
          <Image src={vinDecoder} alt="vinCheck" placeholder="blur" />

          <h1 className="text-2xl my-6 font-semibold text-[#3E54AC]">
            How to Decode the Vehicle Identification Number
          </h1>
          <p className="text-lg mt-4 leading-8	">
            {" "}
            1. Locate the Vehicle Identification Number (VIN). The VIN is
            typically located on the driver's side dashboard, near the
            windshield, or on the driver's side door jamb.
            <br />
            2. Determine the country of origin. The first three digits of the
            VIN indicate where the vehicle was manufactured. For example, a VIN
            beginning with 1HG indicates that the vehicle was manufactured in
            the United States.
            <br />
            3. Identify the manufacturer and model year. The fourth through
            eighth digits of a VIN indicate information about the manufacturer
            and model year of a vehicle. For example, a VIN beginning with
            1HGCR2F83EA indicates that it is a Honda CR-V from 2014.
            <br />
            4. Determine other features of the vehicle. The ninth digit of a VIN
            is known as a check digit and is used to verify that all other
            digits are correct and valid. The tenth through seventeenth digits
            indicate additional information about features such as engine size,
            body style, transmission type, and more.
          </p>
        </div>
      </section>

      <section className="py-14 p-3">
        <div className="w-4/6 mx-auto lg:w-full sm:w-full">
          <h1 className="text-2xl font-semibold text-[#3E54AC]">
            World Manufacturer Identifier (WMI): Country of Origin Character
            Codes
          </h1>
          <p className="text-lg leading-8	mt-4">
            {" "}
            The World Manufacturer Identifier (WMI) is a three-character
            alphanumeric code that identifies the country of origin of a
            vehicle. The first character of the WMI is a letter that represents
            the country in which the vehicle was manufactured. The second and
            third characters are numbers that identify the specific manufacturer
            within that country.
            <br />
            <br />
            For example, a WMI of "1HG" indicates that the vehicle was
            manufactured in the United States by Honda. A WMI of "WVW" indicates
            that the vehicle was manufactured in Germany by Volkswagen.
          </p>
          <table className="border-collapse w-full border border-[#BFDCE5] bg-white text-sm shadow-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="w-1/4 border border-[#BFDCE5] font-semibold p-4 text-[#3E54AC] text-left">
                  WMI
                </th>
                <th className="w-1/4 border border-[#BFDCE5] font-semibold p-4 text-[#3E54AC] text-left">
                  Region
                </th>
                <th className="w-3/4 border border-[#BFDCE5] font-semibold p-4 text-[#3E54AC] text-left">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  A-H
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  Africa
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  AA-AH = South Africa
                </td>
              </tr>
              <tr>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  J-R
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  Asia
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                  J = Japan <br />
                  KL-KR = South Korea <br />
                  L = China <br />
                  MA-ME = India <br />
                  MF-MK = Indonesia <br />
                  ML-MR = Thailand <br />
                  MS = Myanmar <br />
                  PA-PE = Philippines <br />
                  PL-PR = Malaysia <br />
                  RF-RG = Taiwan
                </td>
              </tr>
              <tr>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  S-Z
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  Europe
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                  SA-SM = United Kingdom <br />
                  SN-ST, W = Germany <br />
                  SU-SZ = Poland <br />
                  TA-TH = Switzerland <br />
                  TJ-TP = Czech Republic <br />
                  TR-TV = Hungary <br />
                  TW = Portugal <br />
                  VA-VE = Austria <br />
                  VF-VR = France <br />
                  VS-VW = Spain <br />
                  VX-V2 = Yugoslavia <br />
                  XL-XM = The Netherlands <br />
                  XS-XW = USSR <br />
                  X3-X0 = Russia <br />
                  YA-YE = Belgium <br />
                  YF-YK = Finland <br />
                  YS-YW = Sweden <br />
                  ZA-ZR = Italy
                </td>
              </tr>
              <tr>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  1-5
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  North America
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                  1, 4, 5 = United States <br />
                  2 = Canada <br />3 = Mexico
                </td>
              </tr>
              <tr>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  6-7
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  Oceania
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                  6A-6W = Australia <br />
                  7A-7E = New Zealand
                </td>
              </tr>
              <tr>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  8-0
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                  South America
                </td>
                <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                  8A-8E = Argentina <br />
                  8F-8J = Chile <br />
                  8X-82 = Venezuela <br />
                  9A-9E, 93-99 = Brazil <br />
                  9F-9J = Colombia
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="bg-[#3E54AC]">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex items-center justify-center justify-around sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Vin Check Online™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
