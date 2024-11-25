import React from "react";

const Stats = ({ properties }) => {
  const checkIns = properties.filter(
    (property) => property.status === "Available"
  ).length;
  const checkOuts = properties.filter(
    (property) => property.status === "Rented"
  ).length;

  return (
    <div className="flex  justify-between mb-6 w-[600px]">
      <div className=" w-[200px] rounded-lg h-[150px] border flex items-center justify-center flex-col">
        <h3 className="text-lg font-bold text-center ">Check-ins</h3>
        <p className="text-center ">{checkIns}</p>
      </div>
      <div className=" w-[200px] rounded-lg h-[150px] border flex items-center justify-center flex-col">
        <h3 className="text-lg font-bold ">Check-outs</h3>
        <p className="">{checkOuts}</p>
      </div>
    </div>
  );
};

export default Stats;
