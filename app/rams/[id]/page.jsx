"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/navbar/page";
import RamSteps from "./components/ramSteps/page";
import data from "../mockData";
import Configurator from "./components/configurator/page";
// import axios from "axios";
// import { Config } from "@/config";

const RamType = ({ params }) => {
  const [selectedStep, setSelectedStep] = useState(1);
  //   const [selectedRam, setSelectedRam] = useState("");

  //   useEffect(() => {
  //     const getRam = async () => {
  //       try {
  //         const response = await axios.get(
  //           `${Config.baseURL}/api/mechanisms/${params?.id}`
  //         );
  //         setSelectedRam(response.data);
  //       } catch (error) {
  //         console.error("Error: ", error);
  //       }
  //     };
  //     getRam();
  //   }, []);

  return (
    <div>
      <Navbar />
      <div
        key={params.id}
        className="mx-auto flex w-full items-center justify-center overflow-hidden text-black"
      >
        <div className="flex w-full flex-col items-center justify-center p-4">
          <div className="p-4 text-center text-black">
            <span className="text-xl font-semibold sm:text-3xl">
              {data[params.id].name}
            </span>
          </div>

          <RamSteps
            step={params.id}
            setSelectedStep={setSelectedStep}
            selectedStep={selectedStep}
          />
        </div>
      </div>
      <div>
        <Configurator selectedStep={selectedStep} ram={params.id} />
      </div>
    </div>
  );
};

export default RamType;
