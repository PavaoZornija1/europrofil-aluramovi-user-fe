"use client";
import Link from "next/link";
import Navbar from "../navbar/page";
import { messages } from "../localization/messages";
import { Config } from "../../config";

export default function PreviousOrders({ locale }) {
  console.log(messages.previousOrders);
  const {
    pageTitle,
    pageDescription,
    orderTitle,
    preparingStatus,
    sentStatus,
    mechDes,
  } = messages[Config.locale].previousOrders;
  const ordersData = [
    {
      orderId: "#1288",
      status: { preparingStatus },
      mech: mechDes,
    },
    {
      orderId: "#1291",
      status: { sentStatus },
      mech: mechDes,
    },
    {
      orderId: "#1305",
      status: { preparingStatus },
      mech: mechDes,
    },
    {
      orderId: "#1321",
      status: { sentStatus },
      mech: mechDes,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="m-auto mt-8 flex max-w-3xl flex-col rounded-md border p-6 shadow-lg text-black">
        <h1 className="border-b-2 pb-4 text-3xl font-semibold">{pageTitle}</h1>
        <p className="mt-4">{pageDescription} </p>
      </div>
      <div className="my-8 grid w-full grid-cols-1 place-items-center gap-6 p-4 text-black md:grid-cols-2 xl:grid-cols-3">
        {ordersData.map((order, id) => {
          return (
            <Link
              href={{
                pathname: `/work-order-summary/${order.orderId.replace(
                  "#",
                  ""
                )}`,
              }}
              key={`order${id}`}
              className="w-full rounded-md border p-4 shadow-lg transition-all duration-200 hover:shadow-2xl"
            >
              <div className="mb-2 flex flex-col-reverse items-start gap-2 sm:flex-row sm:justify-between">
                <h2 className="font-semibold text-blue-400">
                  {orderTitle} {order.orderId}
                </h2>
                <p
                  className={`rounded-lg ${
                    order.preparingStatus === "U pripremi"
                      ? "bg-blue-400"
                      : "bg-red-400"
                  } px-2 text-white`}
                >
                  {order.sentStatus}
                </p>
              </div>
              <p>{order.mech}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
