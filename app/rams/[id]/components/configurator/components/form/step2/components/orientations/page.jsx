"use client";
import React from "react";
import Image from "next/image";
// import png from "../../../../../../../../../../";

function OrientationsAndDimensions(props) {
  const {
    frontsData,
    activeFrontId,
    orientationData,
    activeOrientation,
    setActiveOrientation,
    updateOrientation,
  } = props;

  return (
    <div className="grid grid-cols-3 gap-8">
      {orientationData.map((item, id) => {
        return (
          <div
            key={id}
            className={`${
              activeOrientation === id
                ? "bg-blue-50 border border-blue-400 hover:border-blue-400"
                : ""
            } aspect-square flex flex-col gap-4 items-center hover:border hover:border-gray-400 cursor-pointer`}
            onClick={() => {
              setActiveOrientation(id);
              updateOrientation(activeFrontId, item.name);
            }}
          >
            <Image
              alt={item.imageName}
              src={`/images/${item.imageName}`}
              width={100}
              height={100}
            ></Image>
            <p className="font-semibold text-lg">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default OrientationsAndDimensions;
