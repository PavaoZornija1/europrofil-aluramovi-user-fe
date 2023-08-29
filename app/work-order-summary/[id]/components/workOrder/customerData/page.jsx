import React from "react";
import Notes from "./notes/page";
// import OrderNumber from "../orderNumber/page";

function CustomerData() {
  return (
    <div className="flex w-full flex-col border-t py-2 text-black">
      {/* <div className="w-full ">
        <OrderNumber />
      </div> */}
      <h3 className="text-xl font-semibold uppercase">Podaci o kupcu</h3>
      <div className="w-full py-2">
        <table className="w-full table-auto text-left ">
          <tbody>
            <tr>
              <th className="py-2">Ime:</th>
              <td>Nikola Manage IT</td>
            </tr>
            <tr>
              <th className="py-2">Telefon:</th>
              <td>+387 65 323 477</td>
            </tr>
            <tr>
              <th className="py-2">Email:</th>
              <td>nikola.ceric@manage-it.tech</td>
            </tr>
            <tr>
              <th className="py-2">Adresa:</th>
              <td>Živojina Mišića 4, 74450 Brod RS, BiH</td>
            </tr>
            <tr>
              <th className="py-2">Adresa za dostavu:</th>
              <td>Živojina Mišića 4, 74450 Brod RS, BiH</td>
            </tr>
            <tr>
              <th className="py-2">Željeni datum isporuke: </th>
              <td></td>
            </tr>
            <tr>
              <th className="py-2">Interni broj porudžbenice:</th>
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
