"use client";
import Link from "next/link";
import Navbar from "../navbar/page";

export default function PreviousOrders() {
  const ordersData = [
    {
      orderId: "#1288",
      status: "U pripremi",
      mech: "RAM 1009, 2000mm x 1600mm, 1 komad",
    },
    {
      orderId: "#1291",
      status: "Poslato na izvršenje",
      mech: "RAM 1009, 2000mm x 1600mm, 1 koma",
    },
    {
      orderId: "#1305",
      status: "U pripremi",
      mech: "RAM 1009, 2000mm x 1600mm, 1 koma",
    },
    {
      orderId: "#1321",
      status: "Poslato na izvršenje",
      mech: "RAM 1009, 2000mm x 1600mm, 1 koma",
    },
  ];

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
                  Porudžbina {order.orderId}
                </h2>
                <p
                  className={`rounded-lg ${
                    order.status === "U pripremi" ? "bg-blue-400" : "bg-red-400"
                  } px-2 text-white`}
                >
                  {order.status}
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
