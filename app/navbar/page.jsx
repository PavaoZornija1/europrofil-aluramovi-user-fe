"use client";
import Image from "next/image";
import Logo from "../../public/logo3.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdditionalFillTreatment,
  setFill,
  setFrameType,
  setHandleProfile,
  setHeight,
  setHinges,
  setHingesQty,
  setOrientation,
  setQty,
  setQtyTotal,
  setRalCode,
  setSubfill,
  setTreatment,
  setWidth,
} from "../features/ram/ramData";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const qty = useSelector((state) => state.data.qtyTotal);

  const handleDefaultValues = () => {
    // dispatch(setFrameType({}));
    // dispatch(setTreatment({}));
    // dispatch(setRalCode(""));
    // dispatch(setFill({}));
    // dispatch(setSubfill({}));
    // dispatch(setAdditionalFillTreatment({}));
    // dispatch(setHinges({}));
    // dispatch(setHingesQty(0));
    // dispatch(setHandleProfile({}));
    // dispatch(setQty(1));
    // dispatch(setQtyTotal(0));
    // dispatch(setWidth(1000));
    // dispatch(setHeight(1000));
    // dispatch(setOrientation(""));
    // console.log(qty);
    router.push("/");
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div className="w-full bg-gradient-to-tl from-[#11698E] to-slate-800 p-4 xl:hidden">
        {/* profilna slika + logout */}

        {user && (
          <span className="text-xl tracking-wider text-white">
            Welcome {user}
          </span>
        )}

        <div
          className="self-align absolute right-0 top-1 z-40"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? (
            <AiOutlineClose className="text-6xl text-white" />
          ) : (
            <GiHamburgerMenu className="text-5xl text-white" />
          )}
        </div>
      </div>
      {showMenu && (
        <div
          className="absolute left-0 top-0 z-30 h-screen w-screen bg-gradient-to-tl from-[#11698E] to-slate-800 xl:hidden "
          onClick={() => setShowMenu(false)}
        >
          <ul className="m-14 flex min-h-[550px] flex-col items-center justify-center p-4 uppercase">
            <li className="m-4 rounded-full px-3 py-1 text-center align-middle text-2xl font-semibold text-white underline transition-all hover:bg-white hover:text-black">
              <Link href={"/rams"} onClick={handleDefaultValues}>
                Nova porudžbina
              </Link>
            </li>
            <li className="m-4 rounded-full px-3 py-1 text-center align-middle text-2xl font-semibold text-white underline transition-all hover:bg-white hover:text-black">
              <Link href={"/previous-orders"}>Stara porudžbina</Link>
            </li>
            <button
              onClick={handleLogout}
              className="m-4 rounded-full px-3 py-1 align-middle text-2xl font-semibold text-red-500 underline transition-all hover:bg-white hover:text-black"
            >
              Log Out
            </button>
          </ul>
        </div>
      )}

      {/* DESKTOP MODE */}
      <div className="m-auto hidden w-full justify-between bg-gradient-to-tl from-[#11698E] to-slate-800 p-4 xl:flex">
        {/* LINKOVI */}
        <div className="w-[33%] self-center p-2 py-5 text-black">
          <button
            // href="/rams"
            className="mr-8 rounded-full border border-white px-3 py-1 align-middle font-semibold text-white transition-all hover:bg-white hover:text-black"
            onClick={() => handleDefaultValues()}
          >
            Nova porudžbina
          </button>
          <Link
            href="/previous-orders"
            className="rounded-full border border-white px-3 py-1 align-middle font-semibold text-white transition-all hover:bg-white hover:text-black"
          >
            Stara porudžbina
          </Link>
        </div>
        {/* LOGO */}
        <div className="w-[33%] self-center p-2">
          <Image src={Logo} alt="europrofil logo" className="m-auto" priority />
        </div>

        {/* profilna slika + logout */}
        <div className="flex w-[33%] justify-end self-center p-2">
          {user && (
            <span className="mr-12  px-3 align-middle text-2xl font-bold tracking-wider text-white">
              Welcome {user}
            </span>
          )}

          <button
            onClick={handleLogout}
            className="rounded-full border px-3 py-1 align-middle font-semibold text-white transition-all hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
