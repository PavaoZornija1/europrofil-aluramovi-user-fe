"use client";
import React from "react";

export default function DetailedPrice() {
  return (
    <div className="w-full ">
      <h3 className="pb-8 text-2xl font-semibold ">Detaljni obračun cene</h3>
      <table className="mb-8 w-full table-auto border-b text-left text-sm">
        <thead className="border-b-2 text-xs uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 text-lg">
              Šifra
            </th>
            <th scope="col" className="px-6 py-3 text-center text-lg">
              Stavka
            </th>
            <th scope="col" className="px-6 py-3 text-center text-lg">
              Cena po jedinici
            </th>
            <th scope="col" className="px-6 py-3 text-center text-lg">
              Količina
            </th>
            <th scope="col" className="px-6 py-3 text-center text-lg">
              Jedinica mere
            </th>
            <th scope="col" className="px-6 py-3 text-center text-lg">
              Cena bez popusta
            </th>
            <th scope="col" className="px-6 py-3 text-center text-lg">
              Popust
            </th>
            <th scope="col" className="px-6 py-3 text-end text-lg">
              Cena sa popustom
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            >
              439
            </td>
            <td className="px-6 py-4 text-center text-lg">
              ALU profil RAM 1003 N, Antracit siva
            </td>
            <td className="px-6 py-4 text-center text-lg">982.00</td>
            <td className="px-6 py-4 text-center text-lg">4.40</td>
            <td className="px-6 py-4 text-center text-lg">m</td>
            <td className="px-6 py-4 text-center text-lg">2.50 </td>
            <td className="px-6 py-4 text-center text-lg">4,320.80</td>
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">4,320.80</td>
          </tr>
          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            >
              KP
            </td>
            <td className="px-6 py-4 text-center text-lg">KP obrada</td>
            <td className="px-6 py-4 text-center text-lg">178.00</td>
            <td className="px-6 py-4 text-center text-lg">4.00</td>
            <td className="px-6 py-4 text-center text-lg">m</td>
            <td className="px-6 py-4 text-center text-lg">712.00</td>
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">712.00</td>
          </tr>
          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            >
              319
            </td>
            <td className="px-6 py-4 text-center text-lg">Ogledalo obično</td>
            <td className="px-6 py-4 text-center text-lg">3,002.00</td>
            <td className="px-6 py-4 text-center text-lg">1.096</td>
            <td className="px-6 py-4 text-center text-lg">m²</td>
            <td className="px-6 py-4 text-center text-lg">3,289.00</td>
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">3,289.00</td>
          </tr>
          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            >
              124
            </td>
            <td className="px-6 py-4 text-center text-lg">Metalni uglovi</td>
            <td className="px-6 py-4 text-center text-lg">92.00</td>
            <td className="px-6 py-4 text-center text-lg">4</td>
            <td className="px-6 py-4 text-center text-lg">kom</td>
            <td className="px-6 py-4 text-center text-lg">368.00</td>
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">368.00</td>
          </tr>
          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            >
              HNDH
            </td>
            <td className="px-6 py-4 text-center text-lg">Rupa za ručicu</td>
            <td className="px-6 py-4 text-center text-lg">55.00</td>
            <td className="px-6 py-4 text-center text-lg">2</td>
            <td className="px-6 py-4 text-center text-lg">kom</td>
            <td className="px-6 py-4 text-center text-lg">110.00</td>
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">110.00</td>
          </tr>
          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            >
              HHC
            </td>
            <td className="px-6 py-4 text-center text-lg">Rupa za šarke</td>
            <td className="px-6 py-4 text-center text-lg">50.00</td>
            <td className="px-6 py-4 text-center text-lg">2</td>
            <td className="px-6 py-4 text-center text-lg">kom</td>
            <td className="px-6 py-4 text-center text-lg">100.00</td>
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">100.00</td>
          </tr>
          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            ></td>
            <td className="px-6 py-4 text-center text-lg">Usluga izrade</td>
            <td className="px-6 py-4 text-center text-lg">1,580.00</td>
            <td className="px-6 py-4 text-center text-lg">1</td>
            <td className="px-6 py-4 text-center text-lg">kom</td>
            <td className="px-6 py-4 text-center text-lg">1,580.00</td>
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">1,580.00</td>
          </tr>
        </tbody>
      </table>
      <div className="flex w-full p-4">
        <p className="w-1/2 text-xl font-semibold">
          U slučaju izmene porudžbenica, kupac snosi potencijalne dodatne
          troškove
        </p>
        <div className="flex w-1/2 flex-col gap-4">
          <div className="flex w-full justify-between">
            <h3 className="text-lg font-semibold">UKUPNO</h3>
            <p>10,479.80 RSD</p>
          </div>
          <div className="flex w-full justify-between">
            <h3 className="text-lg font-semibold">PDV (20.00%)</h3>
            <p>2,095.96 RSD</p>
          </div>
          <div className="flex w-full justify-between">
            <h3 className="text-lg font-semibold">UKUPNO SA PDV-om</h3>
            <p className="text-lg font-semibold">12,575.77 RSD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
