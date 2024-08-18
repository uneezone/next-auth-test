//app/components/SignInButton.tsx

"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        className="rounded-xl border bg-red-300 px-12 py-4"
        onClick={() => signOut()}
      >
        {session.user.name}님 LogOut
      </button>
    );
  }
  return (
    <button
      className="rounded-xl border bg-yellow-300 px-12 py-4"
      onClick={() => signIn()}
      
    >
      LogIn
    </button>
  );
}

export default SignInButton;
