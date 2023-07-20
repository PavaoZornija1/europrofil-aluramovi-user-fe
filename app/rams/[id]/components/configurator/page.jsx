"use client";
import { useState, useEffect } from "react";
// import Scheme from "./components/scheme/page";
// import Modal from "@/app/UI/modal/page";
// import Overlay from "@/app/UI/overlay/page";
import Form from "./components/form/page";
// import ChosenRetarders from "./components/chosenRetarders/page";
// import DisplayRetarders from "./components/displayRetarders/page";
// import Button from "@/app/UI/button/page";
// import Link from "next/link";

export default function Configurator(props) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <>
      <div className="pb-24 text-black">
        {/* {showModal && (
          <>
            <Modal
              onClose={handleCloseModal}
              firstTitle="Gornja šina"
              secondTitle="Donja šina"
            />
            <Overlay onClose={handleCloseModal} />
          </>
        )} */}

        <div className="m-auto flex w-11/12 flex-col justify-between gap-4 lg:flex-row">
          <Form selectedStep={props.selectedStep} />
          {/* <div className="mb-16 flex w-full justify-center self-start overflow-hidden rounded-lg p-6 shadow-md shadow-gray-500 lg:w-1/2">
            <div className="flex flex-col">
              <ChosenRetarders
                selectedOption={selectedOption}
                leftClicked={leftClicked}
                leftRetClicked={leftRetClicked}
                rightRetClicked={rightRetClicked}
              />
              <Scheme
                height={height}
                width={width}
                selectedOption={selectedOption}
                leftClicked={leftClicked}
                setLeftClicked={setLeftClicked}
                rightClicked={rightClicked}
                verticalDoorsQty={verticalDoorsQty}
                setRightClicked={setRightClicked}
                activeLink={activeLink}
                activeDoorID={activeDoorID}
                setActiveDoorID={setActiveDoorID}
                typeOfFillLength={typeOfFillLength}
                chosenFill={activeDoorID[activeLink].fills}
                setChosenFill={setChosenFill}
                chosenGlassFill={chosenGlassFill}
                setChosenGlassFill={setChosenGlassFill}
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
