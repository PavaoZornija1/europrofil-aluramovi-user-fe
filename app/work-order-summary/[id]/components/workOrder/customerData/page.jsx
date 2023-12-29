import React from "react";
import Notes from "./notes/page";
import { useSelector } from "react-redux";
// import OrderNumber from "../orderNumber/page";

function CustomerData() {
  const userInfo = useSelector((state) => state.data.user);
  return (
    <div className="flex w-full flex-col border-t-2 py-2 text-black border-b-2 pb-5">
      {/* <div className="w-full ">
        <OrderNumber />
      </div> */}
      <h3 className="text-xl font-semibold uppercase">Podaci o kupcu</h3>
      <div className="w-full py-2">
        <table className="w-full table-auto text-left ">
          <tbody>
            <tr>
              <th className="py-2">Ime:</th>
              <td>{userInfo?.username}</td>
            </tr>
            <tr>
              <th className="py-2">Telefon:</th>
              <td>{userInfo?.phone}</td>
            </tr>
            <tr>
              <th className="py-2">Email:</th>
              <td>{userInfo?.email}</td>
            </tr>
            <tr>
              <th className="py-2">Adresa:</th>
              <td>{userInfo?.address}</td>
            </tr>
            <tr>
              <th className="py-2">Adresa za dostavu:</th>
              <td>{userInfo?.deliveryAddress}</td>
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
