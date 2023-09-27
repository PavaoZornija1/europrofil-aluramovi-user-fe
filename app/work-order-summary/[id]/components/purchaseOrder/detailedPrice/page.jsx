"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DetailedPrice() {
  const aluProfile = useSelector((state) => state.data.frameType);
  const treatment = useSelector((state) => state.data.treatment);
  const fill = useSelector((state) => state.data.fill);
  const subfill = useSelector((state) => state.data.subFill);
  const qtyTotal = useSelector((state) => state.data.qtyTotal);
  const additionalFillTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
  );
  const handleHole = useSelector((state) => state.data.handleHole);
  const hingeHole = useSelector((state) => state.data.hingeHole);
  const hinge = useSelector((state) => state.data.hinges);
  const lock = useSelector((state) => state.data.lockHole);

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
              {aluProfile.productCode}
            </td>
            <td className="px-6 py-4 text-center text-lg">
              ALU profil {aluProfile.name}, {treatment.name}
            </td>
            <td className="px-6 py-4 text-center text-lg">
              {Number(aluProfile.pricePerMeter).toFixed(2)}
            </td>
            {/* SKONTATI KAKO SE DOBIJE KOLICINA */}
            <td className="px-6 py-4 text-center text-lg">4.40</td>
            <td className="px-6 py-4 text-center text-lg">m</td>
            <td className="px-6 py-4 text-center text-lg">
              {Number(aluProfile.pricePerMeter).toFixed(2)}
            </td>
            {/* DODATI POPUST */}
            <td className="px-6 py-4 text-center text-lg">0%</td>
            <td className="px-6 py-4 text-end text-lg">
              {(Number(aluProfile.pricePerMeter).toFixed(2) * 4.4).toFixed(2)}
            </td>
          </tr>
          {(subfill.name || fill.name) && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                {subfill.productCode || fill.productCode}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {subfill.name || fill.name}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(subfill?.pricePerSquareMeter).toFixed(2) ||
                  Number(fill?.pricePerSquareMeter).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">4.0</td>
              <td className="px-6 py-4 text-center text-lg">
                m<sup>2</sup>
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(subfill.pricePerSquareMeter).toFixed(2) ||
                  Number(fill.pricePerSquareMeter).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(subfill.pricePerSquareMeter).toFixed(2) ||
                  Number(fill.pricePerSquareMeter).toFixed(2)}
              </td>
            </tr>
          )}

          {aluProfile.name && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                {aluProfile.corverCoverProductCode}
              </td>
              <td className="px-6 py-4 text-center text-lg">Metalni uglovi</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(aluProfile.corverCoverPrice).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(qtyTotal * 4)}
              </td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(aluProfile.corverCoverPrice * qtyTotal * 4).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {" "}
                {Number(aluProfile.corverCoverPrice * qtyTotal * 4).toFixed(2)}
              </td>
            </tr>
          )}
          {additionalFillTreatment.name && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                {additionalFillTreatment?.code}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {additionalFillTreatment?.name}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {" "}
                {Number(additionalFillTreatment?.price).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(qtyTotal * 4).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">m</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(additionalFillTreatment.price * qtyTotal * 4).toFixed(
                  2
                )}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(additionalFillTreatment.price * qtyTotal * 4).toFixed(
                  2
                )}
              </td>
            </tr>
          )}

          {handleHole?.handleHoleQty !== 0 && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                HNDH
              </td>
              <td className="px-6 py-4 text-center text-lg">Rupa za ručicu</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(handleHole.handleHolePrice).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {" "}
                {Number(handleHole.handleHoleQty)}
              </td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(
                  handleHole.handleHolePrice * handleHole.handleHoleQty
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(
                  handleHole.handleHolePrice * handleHole.handleHoleQty
                ).toFixed(2)}
              </td>
            </tr>
          )}
          {hingeHole?.hingeHoleQty !== 0 && hinge?.name !== undefined && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                HHIC
              </td>
              <td className="px-6 py-4 text-center text-lg">
                Bušenje rupa sa montažom šarki
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(hingeHole.withMountPrice).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {" "}
                {Number(hingeHole.hingeHoleQty)}
              </td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(
                  hingeHole.withMountPrice * hingeHole.hingeHoleQty
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(
                  hingeHole.withMountPrice * hingeHole.hingeHoleQty
                ).toFixed(2)}
              </td>
            </tr>
          )}
          {hingeHole?.hingeHoleQty !== 0 && hinge?.name === undefined && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                HHC
              </td>
              <td className="px-6 py-4 text-center text-lg">Rupa za šarke</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(hingeHole?.hingeHolePrice).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {hingeHole?.hingeHoleQty}
              </td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(
                  hingeHole?.hingeHolePrice * hingeHole?.hingeHoleQty
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(
                  hingeHole?.hingeHolePrice * hingeHole?.hingeHoleQty
                ).toFixed(2)}
              </td>
            </tr>
          )}
          {hinge?.name && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                {hinge.productCode}
              </td>
              <td className="px-6 py-4 text-center text-lg">{hinge.name}</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(hinge.price).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {hingeHole?.hingeHoleQty}
              </td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(hinge?.price * hingeHole?.hingeHoleQty).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(hinge?.price * hingeHole?.hingeHoleQty).toFixed(2)}
              </td>
            </tr>
          )}
          {/*  */}
          {lock?.lockAmount && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                HLCK
              </td>
              <td className="px-6 py-4 text-center text-lg">Rupa za bravicu</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(lock.lockPrice).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {lock?.lockAmount}
              </td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(lock?.lockPrice * lock?.lockAmount).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(lock?.lockPrice * lock?.lockAmount).toFixed(2)}
              </td>
            </tr>
          )}
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
