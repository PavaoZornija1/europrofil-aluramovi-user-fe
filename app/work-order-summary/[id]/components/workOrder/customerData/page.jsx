import React from "react";
import Notes from "./notes/page";
// import OrderNumber from "../orderNumber/page";
import { messages } from "app/localization/messages.js";
import { Config } from "@/config";

function CustomerData(locale) {
  console.log(messages.customerData);
  const {
    title,
    nameLabel,
    phoneLabel,
    emailLabel,
    addressLabel,
    deliveryAddressLabel,
    deliveryDateLabel,
    orderNumberLabel,
  } = messages[Config.locale].customerData;

  return (
    <div className="flex w-full flex-col border-t py-2 text-black">
      {/* <div className="w-full ">
        <OrderNumber />
      </div> */}
      <h3 className="text-xl font-semibold uppercase">{title}</h3>
      <div className="w-full py-2">
        <table className="w-full table-auto text-left ">
          <tbody>
            <tr>
              <th className="py-2">{nameLabel}</th>
              <td>Nikola Manage IT</td>
            </tr>
            <tr>
              <th className="py-2">{phoneLabel}</th>
              <td>+387 65 323 477</td>
            </tr>
            <tr>
              <th className="py-2">{emailLabel}</th>
              <td>nikola.ceric@manage-it.tech</td>
            </tr>
            <tr>
              <th className="py-2">{addressLabel}</th>
              <td>Živojina Mišića 4, 74450 Brod RS, BiH</td>
            </tr>
            <tr>
              <th className="py-2">{deliveryAddressLabel}</th>
              <td>Živojina Mišića 4, 74450 Brod RS, BiH</td>
            </tr>
            <tr>
              <th className="py-2">{deliveryDateLabel} </th>
              <td></td>
            </tr>
            <tr>
              <th className="py-2">{orderNumberLabel}</th>
              <td></td>
            </tr>
          </tbody>
        </table>
        <Notes />
      </div>
    </div>
  );
}

export default CustomerData;
