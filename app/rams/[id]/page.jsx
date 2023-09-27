"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/navbar/page";
import RamSteps from "./components/ramSteps/page";

import Configurator from "./components/configurator/page";
import axios from "axios";
import { Config } from "@/config";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFrameType } from "@/app/features/ram/ramData";

const RamType = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  const [selectedRam, setSelectedRam] = useState({});

  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {
    const getRam = async () => {
      try {
        const response = await axios.get(
          `${Config.baseURL}/api/alu-profiles/${params.id}`
        );
        setSelectedRam(response.data);
        dispatch(setFrameType(response.data));
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getRam();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        key={selectedRam.id}
        className="mx-auto flex w-full items-center justify-center overflow-hidden text-black"
      >
        <div className="flex w-full flex-col items-center justify-center p-4">
          <div className="p-4 text-center text-black">
            <span className="text-xl font-semibold sm:text-3xl">
              {selectedRam.name}
            </span>
          </div>

          <RamSteps
            step={selectedRam.id}
            setSelectedStep={setSelectedStep}
            selectedStep={selectedStep}
          />
        </div>
      </div>
      <div>
        <Configurator selectedStep={selectedStep} ram={selectedRam} />
      </div>
    </div>
  );
};

export default RamType;
