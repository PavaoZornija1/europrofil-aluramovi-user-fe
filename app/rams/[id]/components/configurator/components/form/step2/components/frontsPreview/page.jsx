"use client";
import React, { useState } from "react";
import Button from "@/app/UI/button/page";
import Link from "next/link";

function FrontsPreview(props) {
  const {
    frontsData,
    activeFrontId,
    addNewFront,
    copyFront,
    deleteFront,
    setActiveFrontId,
    orientationData,
    setActiveOrientation,
  } = props;

  return (
    <div>
      <div className="flex justify-center gap-4 mb-4 flex-wrap md:gap-8">
        <Button
          onClick={() => {
            addNewFront();
          }}
        >
          Dodajte front
        </Button>
        <Button
          onClick={() => {
            copyFront(activeFrontId);
          }}
        >
          Kopirajte front
        </Button>
        <Button
          onClick={() => {
            deleteFront(activeFrontId);
          }}
        >
          Obrišite front
        </Button>
        <Link href="/work-order-summary">
          <Button>Pregled naloga</Button>
        </Link>
      </div>

      <div className="flex justify-center gap-4 flex-wrap md:gap-8">
        {frontsData?.map((front, id) => {
          return (
            <Button
              key={`frontBtn-${id}`}
              className={
                activeFrontId === id
                  ? "bg-green-400 border border-green-500"
                  : ""
              }
              onClick={() => {
                setActiveFrontId(id);
                setActiveOrientation(() =>
                  orientationData.indexOf(
                    orientationData.find(
                      (item) => item.name === frontsData[id]?.orientation
                    )
                  )
                );
              }}
            >
              Front {id + 1}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default FrontsPreview;
