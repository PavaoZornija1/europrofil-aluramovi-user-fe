import React from "react";
import Image from "next/image";

function RamItem(props) {
  return (
    <div
      key={props.id}
      className="flex flex-col p-4 items-center rounded-md border shadow-lg transition-all duration-200 hover:shadow-2xl cursor-pointer"
    >
      <a
        href="https://europrofil.rs/"
        target="_blank"
        className="text-red-500 self-end mb-4"
      >
        detaljnije
      </a>
      <Image
        src={`/images/${props.name.replace("/", "q")} app.jpeg`}
        alt="ram"
        width={250}
        height={250}
        className="bg-blue-100 h-[250px] w-[250px] flex justify-center items-center border mb-4"
      />
      <h2 className="font-semibold mb-4">{props.name}</h2>
      <div className="flex gap-12 border-t pt-2">
        <p>Tehnički crtež</p>
        <p>Galerija</p>
      </div>
    </div>
  );
}

export default RamItem;
