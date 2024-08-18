// app/signin/page.tsx

"use client";
import React, { useRef, useEffect, useState } from "react";
import { signIn, getProviders } from "next-auth/react";

function Login() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      console.log(res);
      setProviders(res);
    })();
  }, []);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    // console.log(emailRef.current);
    // console.log(passwordRef.current);

    const result = await signIn("credentials", {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handlekakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1 className="text-4xl font-semibold">Login</h1>
      <div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>

          <div className="mt-1">
            <input
              ref={emailRef}
              onChange={(e: any) => {
                emailRef.current = e.target.value;
              }}
              id="email"
              name="email"
              type="email"
              required
              autoFocus={true}
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 foucs:border-blue-400 foucs:outline-none foucs:ring foucs:ring-blue-300 foucs:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:foucs:border-blue-300"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              onChange={(e: any) => {
                passwordRef.current = e.target.value;
              }}
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 foucs:border-blue-400 foucs:outline-none foucs:ring foucs:ring-blue-300 foucs:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:foucs:border-blue-300"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 foucs:bg-gray-600 foucs:outline-none"
          >
            LogIn
          </button>
        </div>
      </div>

      {/* 카카오 버튼 */}
      <div className="space-y-4">
        <button
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 foucs:bg-gray-600 foucs:outline-none"
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
        >
          kakao login
        </button>

        {/* 구글 버튼 */}
        <button
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 foucs:bg-gray-600 foucs:outline-none"
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
        >
          google login
        </button>
      </div>
    </main>
  );
}

export default Login;
