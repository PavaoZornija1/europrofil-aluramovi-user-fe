import React from "react";
import Image from "next/image";
import Link from "next/link";

function RamItem(props) {
  const { ram } = props;
  return (
    <div
      key={ram.id}
      className="flex flex-col p-4 items-center rounded-md border shadow-lg transition-all duration-200 hover:shadow-2xl"
    >
      <a
        href="https://europrofil.rs/"
        target="_blank"
        className="text-red-500 self-end mb-4"
      >
        detaljnije
      </a>
      <Link href={`/rams/${ram.id}?step=1`}>
        <Image
          src={`/images/${ram.name?.replace("/", "q")} app.jpeg`}
          alt="ram"
          width={250}
          height={250}
          className="bg-blue-100 h-[250px] w-[250px] flex justify-center items-center border mb-4"
        />
      </Link>
      <h2 className="font-semibold mb-4">{ram.name}</h2>
      <div className="flex gap-12 border-t pt-2">
        <p className="cursor-pointer hover:underline">Tehnički crtež</p>
        <p className="cursor-pointer hover:underline">Galerija</p>
      </div>
    </div>
  );
}

export default RamItem;
