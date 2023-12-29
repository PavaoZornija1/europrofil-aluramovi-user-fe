"use client";
import React from "react";
import { useSelector } from "react-redux";

const PersonsInCharge = () => {
  const userInfo = useSelector((state) => state.data.user);

  return (
    <div className="mb-10 flex w-full flex-col justify-between gap-4 py-2 sm:flex-row mt-10">
      <div className="flex gap-4 sm:flex-col">
        <span className="font-semibold">Nalog izdao:</span>
        <span>{userInfo?.username}</span>
      </div>
      <div className="flex gap-4 sm:flex-col">
        <span className="font-semibold">Nalog izradio:</span>
        <span></span>
      </div>
      <div className=" flex gap-4 sm:flex-col">
        <span className="font-semibold">Nalog kontrolisao:</span>
        <span></span>
      </div>
    </div>
  );
};

export default PersonsInCharge;
