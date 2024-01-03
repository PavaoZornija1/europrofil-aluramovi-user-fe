"use client";
import axios from "axios";
import Navbar from "../navbar/page";
import { Config } from "@/config";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

export default function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const response = async () => {
    const res = await axios.get(`${Config.baseURL}/api/alu-orders/`);
    if (res.data) {
      setOrders(res.data);
      console.log("DATA: ", res);
    }
  };

  useEffect(() => {
    response();
  }, []);

  const handleChangeBGColor = (order) => {
    let bgColor;
    switch (order?.status) {
      case "KREIRANO":
        bgColor = "bg-yellow-500";
        break;
      case "OBRADA":
        bgColor = "bg-sky-600";
        break;
      case "ZAVRŠENO":
        bgColor = "bg-green-500";
        break;
      default:
        bgColor = "bg-white";
    }
    return bgColor;
  };

  const handleDate = (el) => {
    const date = new Date(el);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };
  return (
    <>
      <Navbar />
      <div className="m-auto mt-8 flex max-w-3xl flex-col rounded-md border p-6 shadow-lg text-black">
        <h1 className="border-b-2 pb-4 text-3xl font-semibold">
          Vaše prethodne porudžbine
        </h1>
        <p className="mt-4">
          Ovde možete pronaći sve Vaše prethodne porudžbine
        </p>
      </div>
      <div className="my-8 grid w-full grid-cols-1 place-items-center gap-6 p-4 text-black md:grid-cols-2 xl:grid-cols-3">
        {orders?.map((order, index) => {
          return (
            <Link
              href={{
                pathname: `/old-purchase-order-summary/${order?.id}`,
              }}
              key={order.id}
              className="group w-full rounded-md border p-4 shadow-lg transition-all duration-200 hover:bg-sky-600 hover:text-white hover:shadow-2xl"
              // onClick={() => {
              //   handleRehydrateStates(order);
              // }}
            >
              <div className="mb-2 flex flex-col-reverse items-start gap-2 sm:flex-row sm:justify-between">
                <h2 className="min-w-[30%] rounded py-0.5 text-xl font-semibold uppercase tracking-widest text-sky-600 group-hover:text-white">
                  Porudžbina #{index + 1}
                </h2>
                <p
                  className={`rounded-lg ${handleChangeBGColor(
                    order
                  )} px-2 py-1 text-white group-hover:bg-white group-hover:text-sky-600 `}
                >
                  {order?.status}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="w-fit rounded-lg text-lg">
                  {order?.frameTypeName}, {order?.fillName}
                </span>
                <span className="text-sm">{handleDate(order?.created)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
