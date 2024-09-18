"use client";
import React from "react";
import {
  getProviders,
  useSession,
  signin,
  signIn,
  signOut,
} from "next-auth/react";

import Header from "../../../components/Header";

export default function SignInPage({ providers }) {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hiden object-cover rotate-6 w-48 md:inline-flex md:w-96"
          src="https://www.netclues.com/caches/926x746/2023-07-31-05-57-37-instagram-marketing.png"
          alt="pic"
        />

        <div className="grid items-center justify-center  ">
          <div className="p-3 flex flex-col">
            <img
              className="w-48 md:w-96"
              src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png"
              alt="logo"
            />
          </div>

          <p className="text-sm italic my-10 text-center">
            This app is created for learning purposes.
          </p>
          <button
            className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500 hover:shadow-lg"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
