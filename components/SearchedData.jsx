import React from "react";

export default function SearchedData({ vinData }) {
  let finallResult = vinData.Results;
  if (finallResult[1].Value == 0) {
    return (
      <>
        {
          <>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-t-md text-white text-3xl text-center font-semibold">
              {finallResult[10].Value} {finallResult[7].Value}{" "}
              {finallResult[9].Value}
            </div>
            <table className="border-collapse w-full border border-[#BFDCE5]  bg-white text-sm shadow-sm">
              <tbody>
                <tr className="sm:grid">
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    VIN <br />
                    <span className="text-xl text-slate-800">
                      {vinData.SearchCriteria.slice(4)}
                    </span>
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Make <br />
                    <span className="text-xl text-slate-800">
                      {finallResult[7].Value}
                    </span>
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Model <br />
                    <span className="text-xl text-slate-800">
                      {finallResult[9].Value}
                    </span>
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Year <br />
                    <span className="text-xl text-slate-800">
                      {finallResult[10].Value}
                    </span>
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Drive Type <br />
                    <span className="text-xl text-slate-800">
                      {finallResult[51].Value}
                    </span>
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Engine <br />
                    <span className="text-xl text-slate-800">
                      {finallResult[73].Value}L
                    </span>
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Fuel Type <br />
                    <span className="text-xl text-slate-800">
                      {finallResult[77].Value}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border-collapse table-auto w-full border border-[#BFDCE5]  bg-white text-sm shadow-sm">
              <tbody>
                <tr className="sm:grid">
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Style/Body <br />
                    <span className="text-lg text-slate-800">
                      {finallResult[109].Value}
                    </span>
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-[#3E54AC] ">
                    Manufactured in
                    <br />
                    <span className="text-xl text-slate-800">
                      {finallResult[11].Value} {finallResult[17].Value}{" "}
                      {finallResult[15].Value}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="border-collapse table-fixed w-full text-sm border">
              <tbody className="bg-white">
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Manufactured By
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[8].Value}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Plant Company Name
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[16].Value !== null
                      ? finallResult[16].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Vehicle Type
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[14].Value !== null
                      ? finallResult[14].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Series
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[23].Value !== null
                      ? finallResult[23].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Doors
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[24].Value !== null
                      ? finallResult[24].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Front Airbag Location
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[95].Value !== null
                      ? finallResult[95].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Front Airbag Location
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[95].Value !== null
                      ? finallResult[95].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Seat Belt Type
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[91].Value !== null
                      ? finallResult[91].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Engine Displacement (CI)
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[72].Value !== null
                      ? finallResult[72].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Engine Displacement (CC)
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[71].Value !== null
                      ? finallResult[71].Value
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                    Engine Number of Cylinders
                  </td>
                  <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                    {finallResult[70].Value !== null
                      ? finallResult[70].Value
                      : "-"}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-t-md text-white text-3xl text-center font-semibold mt-4">
              Additional Vehicle Info
            </div>
            <table className="border-collapse table-fixed w-full text-sm border">
              <tbody className="bg-white">
                {finallResult?.map((item, idx) => {
                  if (item.Value) {
                    if (
                      item.Variable == "Error Code" ||
                      item.Variable == "Error Text"
                    ) {
                      return;
                    }
                    return (
                      <tr key={item.VariableId}>
                        <td className="border border-[#BFDCE5] p-4 text-[#3E54AC]">
                          {item.Variable}
                        </td>
                        <td className="border border-[#BFDCE5]  p-4 text-slate-800 ">
                          {item.Value}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </>
        }
      </>
    );
  } else {
    return (
      <>
        <div>
          <span>
            Sorry, we could not find information for the submitted <span className="text-lg text-red-500">{vinData.SearchCriteria}</span>. Please check your VIN and try again.
          </span>
        </div>
      </>
    );
  }
}
