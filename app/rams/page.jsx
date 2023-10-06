"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import RamItem from "./components/ramItem/page";
import axios from "axios";
import { Config } from "../../config";
import { messages } from "../localization/messages";

function Rams(locale) {
  console.log(messages.rams);
  const { caution, caution1Desc, caution2Desc } = messages[Config.locale].rams;

  const [rams, setRams] = useState([]);
  useEffect(() => {
    const response = async () => {
      const res = await axios.get(`${Config.baseURL}/api/alu-profiles`);
      setRams(res.data);
    };
    response();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-white flex flex-col">
        <div className="m-auto my-8 flex mx-2 md:mx-24 flex-col rounded-md border p-6 shadow-lg text-black">
          <h1 className="border-b-2 pb-4 font-semibold">
            <span className="text-red-500">{caution}</span>:{caution1Desc}
          </h1>
          <p className="mt-4 font-semibold">
            <span className="text-red-500">{caution}</span>:{caution2Desc}
          </p>
        </div>
        <div className="mx-2 md:mx-16 min-h-screen text-black pb-32">
          <div className="flex-wrap gap-16 mx-auto flex justify-center">
            {rams.map((ram, i) => (
              <React.Fragment key={i}>
                <RamItem ram={ram} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rams;
