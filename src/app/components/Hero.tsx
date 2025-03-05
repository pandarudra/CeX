"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";
import Faq from "./Faq";
import Card from "./Card";

export const Hero = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen pt-20 bg-black">
        <Image
          src="https://flowbite.com/docs/images/logo.svg"
          height={80}
          width={80}
          alt="Flowbite Logo"
        />
        <div className="text-6xl font-medium">
          <span className="text-slate-500 gfont">The Cryptocurrency</span>

          <span className="text-blue-500 pl-4">Revolution</span>
        </div>
        <div className="flex justify-center pt-4 text-2xl text-slate-500">
          Create a frictionless wallet from anywhere with just a Google Account.
        </div>
        <div className="flex justify-center pt-2 text-2xl text-slate-500">
          Convert your INR into Cryptocurrency
        </div>
        <div className="pt-8 flex justify-center">
          {session.data?.user ? (
            <SecondaryButton
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Go to Dashboard
            </SecondaryButton>
          ) : (
            <SecondaryButton
              onClick={() => {
                signIn("google");
              }}
            >
              Login with Google
            </SecondaryButton>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen pt-20 bg-black">
        <Card
          imglink="https://flowbite.com/docs/images/logo.svg"
          heading="Heading"
          desc="Description"
        />
      </div>
      <Faq />
    </>
  );
};
