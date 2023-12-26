"use client";
import React from "react";
import { useSelector } from "react-redux";

const Notes = () => {
  const userInfo = useSelector((state) => state.data.user);

  return (
    <div className="mt-4 text-black">
      <h3 className="text-xl font-semibold">Dodatna napomena:</h3>
      <div className="w-full">
        <p className="italic">{userInfo?.note}</p>
      </div>
    </div>
  );
};

export default Notes;
