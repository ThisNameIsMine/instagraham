import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center mt-14 ml-10">
      {session && (
        <img
          className="h-16 rounded-full border p-[2px]"
          src={session?.user?.image}
          alt="User"
        />
      )}
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagraham.</h3>
      </div>

      {session ? (
        <button
          onClick={signOut}
          className="font-semibold text-blue-400 text-sm"
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={signIn}
          className="font-semibold text-blue-400 text-sm"
        >
          Log in
        </button>
      )}
    </div>
  );
}
