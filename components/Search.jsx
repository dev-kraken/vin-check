import React, { useState, useEffect } from "react";

export default function Search({ setVinData }) {
  const [Loading, setLoading] = useState(false);

  const [vinNumber, setVinNumber] = useState("");

  const [vinLenght, setvinLenghtError] = useState(false);

  const handleChange = (e) => {
    setVinNumber(e.target.value);
    vinLenght == true || vinNumber.length == 17 ? setvinLenghtError(false) : '';
  };

  const vinSearch = async (e) => {
    e.preventDefault();
    vinNumber.length !== 17 ? setvinLenghtError(true) && setLoading(false) : setLoading(true) && setvinLenghtError(false);
  };

  useEffect(() => {
    if (Loading) {
      fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinNumber}?format=json`
      )
        .then(async (res) => await res.json())
        .then((data) => {
          setVinData(data);
          setLoading(false);
        });
    }
  }, [Loading, setVinData, vinNumber]);
  return (
    <>
      <form onSubmit={vinSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block uppercase w-full p-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#EEEEEE] focus:border-[#3E54AC]"
            placeholder="Check Your VIN Free..."
            onChange={handleChange}
            value={vinNumber}
            maxLength="17"
            required
          />
          {!Loading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button type="submit" aria-label="Check Vin">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#3E54AC]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          )}
          {Loading && (
            <svg
              className="absolute right-2.5 bottom-2.5 top-1/3 animate-spin -ml-1 mr-3 h-5 w-5 text-[#3E54AC]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </div>
        {vinLenght && <p class="text-red-500 text-xs italic mt-2">Please Enter 17 Characters VIN Number</p>}
        
      </form>
    </>
  );
}
