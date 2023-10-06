import Link from "next/link";
import { messages } from "app/localization/messages.js";
import { Config } from "../../config";

export default function Footer({ locale }) {
  console.log(messages.ftr);
  const { rightsReserved, designDevelopment } = messages[Config.locale].ftr;
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="fixed bottom-0 flex w-full justify-around bg-gradient-to-tl from-[#11698E] to-slate-800 px-4 py-2 text-center text-xs font-bold text-white md:text-lg">
      <span className="w-full">
        <Link
          href={"https://europrofil.rs/"}
          target="_blank"
          className="underline"
        >
          Europrofil
        </Link>
        &copy; {year}. {rightsReserved}
      </span>
      <span className="w-full">
        {designDevelopment}
        <Link
          href={"https://manage-it.tech/"}
          target="_blank"
          className="p-2 underline"
        >
          Manage IT
        </Link>
      </span>
    </footer>
  );
}
