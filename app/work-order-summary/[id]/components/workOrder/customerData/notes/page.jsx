"use client";
import React from "react";
import { messages } from "app/localization/messages.js";
import { Config } from "@/config";

const Notes = () => {
  console.log(messages.notes);
  const { noteTitle } = messages[Config.locale].notes;
  return (
    <div className="mt-4 text-black">
      <h3 className="text-xl font-semibold">{noteTitle}</h3>
      <div className="w-full">
        <p className="italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          distinctio exercitationem ab quos quasi consequuntur maxime eius,
          sequi neque earum sed nostrum debitis enim dolorum beatae iure unde
          sint reiciendis delectus. Ipsum cumque officia iure animi doloremque
          quasi hic aspernatur.
        </p>
      </div>
    </div>
  );
};

export default Notes;
