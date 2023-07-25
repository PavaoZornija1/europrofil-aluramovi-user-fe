"use client";
import Form from "./components/form/page";

export default function Configurator(props) {
  return (
    <>
      <div className="pb-24 text-black">
        <div className="m-auto flex w-11/12 flex-col justify-between gap-4 lg:flex-row">
          <Form selectedStep={props.selectedStep} />
        </div>
      </div>
    </>
  );
}
