"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Config } from "@/config";
import { useParams } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

function PreviousCustomerData() {
  const { user } = useAuth();
  const [orders, setOrders] = useState();
  const params = useParams();
  useEffect(() => {
    const response = async () => {
      const res = await axios.get(
        `${Config.baseURL}/api/alu-orders/${params?.id}`
      );
      setOrders(res?.data);
    };
    response();
  }, []);

  const deliveryDate = () => {
    const date = new Date(orders?.customerDesiredDeliveryDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="flex w-full flex-col border-t py-2 text-black">
      <div className="w-full ">{/* <PreviousOrderNumber /> */}</div>
      <h3 className="text-xl font-semibold uppercase">Podaci o kupcu</h3>
      <div className="w-full py-2">
        <table className="w-full table-auto text-left ">
          <tbody>
            <tr>
              <th className="py-2">Ime:</th>
              <td>{orders?.name || user?.name}</td>
            </tr>
            <tr>
              <th className="py-2">Telefon:</th>
              <td>{orders?.phone || user?.phone}</td>
            </tr>
            <tr>
              <th className="py-2">Email:</th>
              <td>{orders?.email || user?.email}</td>
            </tr>
            <tr>
              <th className="py-2">Adresa:</th>
              <td>{orders?.address || user?.address}</td>
            </tr>
            <tr>
              <th className="py-2">Adresa za dostavu:</th>
              <td>{orders?.deliveryAddress || user?.deliveryAddress}</td>
            </tr>
            <tr>
              <th className="py-2">Željeni datum isporuke: </th>
              <td>
                {orders?.customerDesiredDeliveryDate !== null
                  ? new Date(
                      orders?.customerDesiredDeliveryDate
                    ).toLocaleDateString("en-GB")
                  : "-"}
              </td>
            </tr>
            <tr>
              <th className="py-2">Interni broj porudžbenice:</th>
              <td>{orders?.ibp}</td>
            </tr>
          </tbody>
        </table>
        {/* <PreviousNotes /> */}
      </div>
    </div>
  );
}

export default PreviousCustomerData;
