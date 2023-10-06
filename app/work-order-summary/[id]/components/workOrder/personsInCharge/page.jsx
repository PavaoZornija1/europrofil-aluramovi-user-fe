"use client";
import React from "react";
import { messages } from "app/localization/messages.js";
import { Config } from "@/config";

const PersonsInCharge = (locale) => {
  console.log(messages.personInCharge);
  const { issuedBy, createdBy, controlledBy } =
    messages[Config.locale].personInCharge;
  return (
    <div className="mb-10 flex w-full flex-col justify-between gap-4 py-2 sm:flex-row">
      <div className="flex gap-4 sm:flex-col">
        <span className="font-semibold">{issuedBy}</span>
        <span>Nikola Manage IT</span>
      </div>
      <div className="flex gap-4 sm:flex-col">
        <span className="font-semibold">{createdBy}</span>
        <span>Marko Markovic</span>
      </div>
      <div className=" flex gap-4 sm:flex-col">
        <span className="font-semibold">{controlledBy}</span>
        <span>Marko Markovic</span>
      </div>
    </div>
  );
};

export default PersonsInCharge;
