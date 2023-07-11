import React from "react";
import Navbar from "../navbar/page";
import data from "./mockData";
import RamItem from "./components/ramItem/page";

function Rams() {
  return (
    <div>
      <Navbar />
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
            moguće je postaviti samo dve šarke po jednom aluminijumskom frontu!
          </p>
        </div>
        <div className="mx-2 md:mx-16 min-h-screen text-black pb-32">
          <div className="flex-wrap gap-16 mx-auto flex justify-center">
            {data.map((item, i) => {
              return <RamItem id={i} key={i} name={item.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rams;
