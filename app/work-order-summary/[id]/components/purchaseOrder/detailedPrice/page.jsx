"use client";
import {
  calculateAdditionalFillTreatment,
  calculateAluFrameFillSurfaces,
  calculateAluFrameSurfaces,
  calculateHandleProfileSurfaces,
  calculateMetalCornersQuantity,
  calculateNumberOfLocks,
} from "@/app/utils/calculations";
import { Config } from "@/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DetailedPrice() {
  const aluProfile = useSelector((state) => state.data.frameType);
  const treatment = useSelector((state) => state.data.treatment);
  const fill = useSelector((state) => state.data.fill);
  const qtyTotal = useSelector((state) => state.data.qtyTotal);
  const additionalFillTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
  );
  const liftSupport = useSelector((state) => state.data.liftingSystem);
  const individualFronts = useSelector((state) => state.data.individualFronts);
  const user = useSelector((state) => state.data.user);
  const [pricesFromSettings, setPricesFromSettings] = useState([]);

  const getPricesFromSettings = async () => {
    try {
      let response = await axios(`${Config.baseURL}/api/alu-settings`);
      if (response.data) {
        setPricesFromSettings(response.data);
        console.log("Data: ", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPricesFromSettings();
  }, []);

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
              {Number(treatment?.pricePerMeter).toFixed(2)}
            </td>
            <td className="px-6 py-4 text-center text-lg">
              {Number(
                calculateAluFrameSurfaces(individualFronts, treatment)
              ).toFixed(2)}
            </td>
            <td className="px-6 py-4 text-center text-lg">m</td>
            <td className="px-6 py-4 text-center text-lg">
              {(
                calculateAluFrameSurfaces(individualFronts, treatment) *
                treatment?.pricePerMeter
              ).toFixed(2)}
            </td>
            <td className="px-6 py-4 text-center text-lg">{`${user?.discountHardware}%`}</td>
            <td className="px-6 py-4 text-end text-lg">
              {(
                calculateAluFrameSurfaces(individualFronts, treatment) *
                  treatment?.pricePerMeter -
                (calculateAluFrameSurfaces(individualFronts, treatment) *
                  treatment?.pricePerMeter *
                  user?.discountHardware) /
                  100
              ).toFixed(2)}
            </td>
          </tr>
          {individualFronts?.map((front, index) =>
            front?.handles?.handleProfile?.id ? (
              <tr className={"border-b"} key={index}>
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 text-lg font-medium"
                >
                  {front?.handles?.handleProfile?.productCode}
                </td>
                <td className="px-6 py-4 text-center text-lg">
                  {front?.handles?.handleProfile?.name}
                </td>
                <td className="px-6 py-4 text-center text-lg">
                  {Number(front?.handles?.handleProfile?.pricePerMeter).toFixed(
                    2
                  )}
                </td>
                <td className="px-6 py-4 text-center text-lg">
                  {calculateHandleProfileSurfaces(front).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center text-lg">m</td>
                <td className="px-6 py-4 text-center text-lg">
                  {(
                    calculateHandleProfileSurfaces(front) *
                    front?.handles?.handleProfile?.pricePerMeter
                  ).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center text-lg">{`${user?.discountHardware}%`}</td>
                <td className="px-6 py-4 text-end text-lg">
                  {(
                    calculateHandleProfileSurfaces(front) *
                      front?.handles?.handleProfile?.pricePerMeter -
                    calculateHandleProfileSurfaces(front) *
                      front?.handles?.handleProfile?.pricePerMeter *
                      (user?.discountHardware / 100)
                  ).toFixed(2)}
                </td>
              </tr>
            ) : null
          )}

          {(fill?.subfill?.name || fill.name) && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                {fill?.subfill?.productCode || fill.productCode}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {fill?.subfill?.name || fill.name}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {fill?.subfill?.pricePerSquareMeter
                  ? Number(fill?.subfill?.pricePerSquareMeter).toFixed(2)
                  : Number(fill?.pricePerSquareMeter).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {calculateAluFrameFillSurfaces(
                  aluProfile,
                  individualFronts,
                  fill
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                m<sup>2</sup>
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {fill?.subfill?.pricePerSquareMeter
                  ? (
                      fill?.subfill?.pricePerSquareMeter *
                      calculateAluFrameFillSurfaces(
                        aluProfile,
                        individualFronts,
                        fill
                      )
                    ).toFixed(2)
                  : (
                      fill?.pricePerSquareMeter *
                      calculateAluFrameFillSurfaces(
                        aluProfile,
                        individualFronts,
                        fill
                      )
                    ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">{`${user?.discountFillings}%`}</td>
              <td className="px-6 py-4 text-end text-lg">
                {fill?.subfill?.pricePerSquareMeter
                  ? (
                      fill?.subfill?.pricePerSquareMeter *
                        calculateAluFrameFillSurfaces(
                          aluProfile,
                          individualFronts,
                          fill
                        ) -
                      fill?.subfill?.pricePerSquareMeter *
                        calculateAluFrameFillSurfaces(
                          aluProfile,
                          individualFronts,
                          fill
                        ) *
                        (user?.discountFillings / 100)
                    ).toFixed(2)
                  : (
                      fill?.pricePerSquareMeter *
                        calculateAluFrameFillSurfaces(
                          aluProfile,
                          individualFronts,
                          fill
                        ) -
                      fill?.pricePerSquareMeter *
                        calculateAluFrameFillSurfaces(
                          aluProfile,
                          individualFronts,
                          fill
                        ) *
                        (user?.discountFillings / 100)
                    ).toFixed(2)}
              </td>
            </tr>
          )}

          {aluProfile.id && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                {aluProfile.corverCoverProductCode}
              </td>
              <td className="px-6 py-4 text-center text-lg">Metalni uglovi</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(aluProfile?.corverCoverPrice).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {calculateMetalCornersQuantity(individualFronts)}
              </td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {(
                  calculateMetalCornersQuantity(individualFronts) *
                  aluProfile?.corverCoverPrice
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">{`${user?.discountHardware}%`}</td>
              <td className="px-6 py-4 text-end text-lg">
                {(
                  calculateMetalCornersQuantity(individualFronts) *
                    aluProfile?.corverCoverPrice -
                  calculateMetalCornersQuantity(individualFronts) *
                    aluProfile?.corverCoverPrice *
                    (user?.discountHardware / 100)
                ).toFixed(2)}
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
                {calculateAdditionalFillTreatment(
                  aluProfile,
                  individualFronts,
                  fill
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">m</td>
              <td className="px-6 py-4 text-center text-lg">
                {(
                  calculateAdditionalFillTreatment(
                    aluProfile,
                    individualFronts,
                    fill
                  ) * additionalFillTreatment?.price
                ).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">{`${user?.discountFillings}%`}</td>
              <td className="px-6 py-4 text-end text-lg">
                {(
                  calculateAdditionalFillTreatment(
                    aluProfile,
                    individualFronts,
                    fill
                  ) *
                    additionalFillTreatment?.price -
                  calculateAdditionalFillTreatment(
                    aluProfile,
                    individualFronts,
                    fill
                  ) *
                    additionalFillTreatment?.price *
                    (user?.discountFillings / 100)
                ).toFixed(2)}
              </td>
            </tr>
          )}

          {individualFronts.map((front, index) =>
            front.hinges?.hinge?.id ? (
              <tr className={"border-b"} key={`hinge-${index}`}>
                <td
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 text-lg font-medium"
                >
                  {front.hinges?.hinge?.productCode}
                </td>
                <td className="px-6 py-4 text-center text-lg">
                  {front.hinges?.hinge?.name}
                </td>
                <td className="px-6 py-4 text-center text-lg">
                  {Number(front.hinges?.hinge?.price).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center text-lg">
                  {front.hinges?.numberOfHinges}
                </td>
                <td className="px-6 py-4 text-center text-lg">kom</td>
                <td className="px-6 py-4 text-center text-lg">
                  {Number(
                    front.hinges?.hinge?.price * front.hinges?.numberOfHinges
                  ).toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center text-lg">{`${user?.discountHardware}%`}</td>
                <td className="px-6 py-4 text-end text-lg">
                  {Number(
                    front.hinges?.hinge?.price * front.hinges?.numberOfHinges -
                      Number(
                        front.hinges?.hinge?.price *
                          front.hinges?.numberOfHinges *
                          (user?.discountHardware / 100)
                      )
                  ).toFixed(2)}
                </td>
              </tr>
            ) : null
          )}

          <tr className={"border-b"}>
            <td
              scope="row"
              className="whitespace-nowrap px-6 py-4 text-lg font-medium"
            >
              HLCK
            </td>
            <td className="px-6 py-4 text-center text-lg">Rupa za bravicu</td>
            <td className="px-6 py-4 text-center text-lg">
              {Number(pricesFromSettings[0]?.lockHolePrice).toFixed(2)}
            </td>
            <td className="px-6 py-4 text-center text-lg">
              {calculateNumberOfLocks(individualFronts)}
            </td>
            <td className="px-6 py-4 text-center text-lg">kom</td>
            <td className="px-6 py-4 text-center text-lg">
              {Number(
                pricesFromSettings[0]?.lockHolePrice *
                  calculateNumberOfLocks(individualFronts)
              ).toFixed(2)}
            </td>
            <td className="px-6 py-4 text-center text-lg">{`${user?.discountHardware}%`}</td>
            <td className="px-6 py-4 text-end text-lg">
              {Number(
                pricesFromSettings[0]?.lockHolePrice *
                  calculateNumberOfLocks(individualFronts) -
                  Number(
                    pricesFromSettings[0]?.lockHolePrice *
                      calculateNumberOfLocks(individualFronts)
                  ) *
                    (Number(user?.discountHardware) / 100)
              ).toFixed(2)}
            </td>
          </tr>

          {liftSupport?.name && (
            <tr className={"border-b"}>
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-lg font-medium"
              >
                {liftSupport?.productCode}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {liftSupport?.name}
              </td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(liftSupport.pricePerUnit).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">{qtyTotal}</td>
              <td className="px-6 py-4 text-center text-lg">kom</td>
              <td className="px-6 py-4 text-center text-lg">
                {Number(liftSupport.pricePerUnit * qtyTotal).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center text-lg">0%</td>
              <td className="px-6 py-4 text-end text-lg">
                {Number(liftSupport.pricePerUnit * qtyTotal).toFixed(2)}
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
            {/* <p> {totalPrice} RSD</p> */}
          </div>
          <div className="flex w-full justify-between">
            <h3 className="text-lg font-semibold">
              PDV ({Number(pricesFromSettings[0]?.vat)}%)
            </h3>
            <p>{pricesFromSettings[0]?.currency} </p>
          </div>
          <div className="flex w-full justify-between">
            <h3 className="text-lg font-semibold">UKUPNO SA PDV-om</h3>
            <p className="text-lg font-semibold">
              {/* {(Number(pdv) + Number(totalPrice)).toFixed(2)} RSD */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
