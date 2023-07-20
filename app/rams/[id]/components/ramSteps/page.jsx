"use client";
import Link from "next/link";

export default function RamSteps(props) {
  return (
    <div className="my-4 flex flex-col gap-2 text-lg sm:flex-row">
      <div className="px-2 text-center">
        <Link
          href={`/rams/${props.step}?step=1`}
          className={
            props.selectedStep === 1
              ? "text-center font-semibold text-green-500 underline"
              : "text-center font-semibold hover:underline"
          }
          onClick={() => props.setSelectedStep(1)}
        >
          1. Profil i ispuna
        </Link>
      </div>
      <div className="px-2 text-center">
        <Link
          href={`/rams/${props.step}?step=2`}
          className={
            props.selectedStep === 2
              ? "text-center font-semibold text-green-500 underline"
              : "text-center font-semibold hover:underline"
          }
          onClick={() => props.setSelectedStep(2)}
        >
          2. Pojedinačni frontovi
        </Link>
      </div>
    </div>
  );
}
