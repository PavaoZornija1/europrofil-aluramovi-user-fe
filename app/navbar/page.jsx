"use client";
import Image from "next/image";
import Logo from "../../public/logo3.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";

import { setReset } from "../features/ram/ramData";
import store from "../store/store";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout, token } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDefaultValues = () => {
    dispatch(setReset());
    router.push("/");
  };

  const handleLogout = async () => {
    await logout();
  };

  console.log(store.getState());

  return (
    <>
      <div className="flex w-full items-center bg-gradient-to-tr from-sky-500 to-sky-600 p-4 xl:hidden">
        {/* Profile Picture + Logout */}

        <div
          className="self-align  right-0 top-1 z-40"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? (
            <AiOutlineClose className="text-6xl text-white" />
          ) : (
            <GiHamburgerMenu className="text-5xl text-white" />
          )}
        </div>
        <div className="m-auto flex w-full flex-col self-center p-2">
          <Image src={Logo} alt="europrofil logo" className="m-auto" priority />
          {token && (
            <span className="mt-2 w-full px-3 text-center align-middle text-base font-bold tracking-wider text-white">
              - Dobro došli {user?.name} -
            </span>
          )}
        </div>
      </div>
      {showMenu && (
        <div
          className="absolute left-0 top-0 z-30 h-screen w-screen bg-gradient-to-tr from-sky-500 to-sky-600 xl:hidden "
          onClick={() => setShowMenu(false)}
        >
          <ul className="m-14 flex min-h-[550px] flex-col items-center justify-center p-4 uppercase">
            <li className="m-4 rounded-full px-3 py-1 text-center align-middle text-2xl font-semibold text-white underline transition-all hover:bg-white hover:text-black">
              <Link href={"/rams"}>Nova porudžbina</Link>
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
      <div className="m-auto hidden w-full justify-between bg-gradient-to-tr from-sky-500 to-sky-600 xl:flex">
        {/* LINKOVI */}
        <div className="w-[33%] self-center p-2 py-5 text-black">
          <Link
            href="/rams"
            className="mr-8 rounded-full border border-white px-3 py-1 align-middle font-semibold text-white transition-all hover:bg-white hover:text-black"
          >
            Nova porudžbina
          </Link>
          <Link
            href="/previous-orders"
            className="rounded-full border border-white px-3 py-1 align-middle font-semibold text-white transition-all hover:bg-white hover:text-black"
          >
            Stara porudžbina
          </Link>
        </div>
        {/* LOGO */}
        <div className="flex w-[33%] flex-col self-center p-2">
          <Image src={Logo} alt="europrofil logo" className="m-auto" priority />
          {token && (
            <span className="mt-2 px-3 text-center align-middle text-base font-bold tracking-wider text-white">
              - Dobro došli {user?.name} -
            </span>
          )}
        </div>

        {/* profilna slika + logout */}
        <div className="flex w-[33%] justify-end self-center p-2">
          <button
            onClick={handleLogout}
            className="rounded-full border px-3 py-1 align-middle font-semibold text-white transition-all hover:bg-red-600"
          >
            Odjavi se
          </button>
        </div>
      </div>
    </>
  );
}
