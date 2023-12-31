"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import RamItem from "./components/ramItem/page";
import axios from "axios";
import { Config } from "../../config";
import Loading from "../loading";

function Rams() {
  const [rams, setRams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    try {
      const response = async () => {
        const res = await axios.get(`${Config.baseURL}/api/alu-profiles`);
        setRams(res.data);
        setIsLoading(false);
      };
      response();
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Loading heightValue={"screen"} widthValue={"screen"} />
      ) : (
        <div className="bg-white flex flex-col">
          <div className="m-auto my-8 flex mx-2 md:mx-24 flex-col rounded-md border p-6 shadow-lg text-black">
            <h1 className="border-b-2 pb-4 font-semibold">
              <span className="text-red-500">Napomena za korisnike</span>:
              Prilikom izrade fronta od RAM 1002 A/N profila kada se na jednu od
              stranica fronta postavlja RAM 1002 A/N profil sa integrisanom
              ručicom potrebno je imati u vidu da pomenuti profil može da se
              postavi samo celom dužinom stranice na koju se postavlja.
            </h1>
            <p className="mt-4 font-semibold">
              <span className="text-red-500">Napomena za korisnike</span>:
              Prilikom izrade fronta od RAM 1009 i 1010 aluminijumskih profila,
              moguće je postaviti samo dve šarke po jednom aluminijumskom
              frontu!
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
      )}
    </div>
  );
}

export default Rams;
