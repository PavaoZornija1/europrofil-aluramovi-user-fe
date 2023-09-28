"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
import { messages } from "../localization/messages";
import { Config } from "../../config";

export default function Login({ locale }) {
  const {
    title,
    usernameLabel,
    passwordLabel,
    forgotPassword,
    loginButton,
    invalidUsername,
    invalidPassword,
  } = messages[Config.locale].messages.login;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, token } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (token) return router.push("/rams");
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUsernameError("");
    setPasswordError("");

    if (username.trim() === "") {
      setUsernameError(invalidUsername);
    }
    if (password.trim() === "") {
      setPasswordError(invalidPassword);
      return;
    }
    try {
      if (username && password) {
        await login(username, password);
      }
    } catch (error) {
      throw new Error("Invalid credentials ", error);
    }
  };

  return (
    <div className="m-auto my-10 h-full w-5/6 rounded-lg bg-gradient-to-tl from-[#11698E] to-slate-800 text-black shadow shadow-gray-500 sm:w-96">
      <form onSubmit={handleSubmit}>
        <div className="w-full p-6 text-center">
          <h2 className="cursor-default text-3xl font-semibold tracking-widest text-white underline sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="flex w-full flex-col items-start justify-center p-5">
          <label htmlFor="username" className="font-semibold text-white">
            {usernameLabel}
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-md border bg-white p-1 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="flex h-5 w-full items-center">
            {usernameError && (
              <span className="text-red-500">{usernameError}</span>
            )}
          </div>
        </div>

        <div className="relative flex w-full flex-col items-start justify-center p-5">
          <label htmlFor="userPassword" className="font-semibold text-white">
            {passwordLabel}
          </label>
          <div className="input-group relative flex w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="userPassword"
              className="w-full rounded-md border bg-white p-1 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="icon absolute right-2 cursor-pointer self-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <div className="flex h-5 w-full items-center">
            {passwordError && (
              <span className="text-red-500">{passwordError}</span>
            )}
          </div>
          <Link
            href="/"
            className="mt-2 text-sm font-semibold text-white underline"
          >
            {forgotPassword}
          </Link>
        </div>

        <div className="w-full p-5">
          <button
            type="submit"
            className="cursor-pointer rounded-full border px-4 py-2 font-bold text-white transition-all hover:scale-105 hover:bg-white hover:text-black"
          >
            {loginButton}
          </button>
        </div>
      </form>
    </div>
  );
}
