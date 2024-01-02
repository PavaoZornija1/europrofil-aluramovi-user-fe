"use client";
import React, { useState } from "react";
import WorkOrderMain from "./[id]/page";

function WorkOrderSummary(props) {
  const [showSavedButton, setShowSavedButton] = useState(false);
  const [showMoreActionButtons, setShowMoreActionButtons] = useState(false);
  return (
    <div>
      <WorkOrderMain
        showSavedButton={showSavedButton}
        setShowSavedButton={setShowSavedButton}
        showMoreActionButtons={showMoreActionButtons}
        setShowMoreActionButtons={setShowMoreActionButtons}
      />
    </div>
  );
}

export default WorkOrderSummary;
