"use client";
import React, { useEffect, useState } from "react";
import { lastFinishData, fills } from "./mockData";
import Accordion from "./components/accordion/page";
import axios from "axios";
import { Config } from "@/config";
import Treatments from "./components/treatments/page";

export default function Step1(props) {
  return (
    <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2">
      <div className="border border-sky-100 rounded-lg shadow-md shadow-gray-500 p-6 self-start">
        <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
          Profil i ispuna
        </h2>
        <div className="mt-4 mx-2 flex flex-col gap-2">
          <Treatments treatments={props.ram} accordionFor={"lastFinishData"} />
        </div>
      </div>
      <div className="border border-lime-100 rounded-lg p-6 shadow-md shadow-gray-500">
        <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
          Izbor ispune
        </h2>
        <div className="mt-4 mx-2 flex flex-col gap-2">
          <Accordion items={props.ram} accordionFor={"fills"} />
        </div>
      </div>
    </div>
  );
}
