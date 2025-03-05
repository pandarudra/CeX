"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Nav from "./Nav";
import { useEffect, useState } from "react";

export const Appbar = () => {
  const session = useSession();
  const [buttonText, setButtonText] = useState("Signin");

  useEffect(() => {
    if (session.data?.user) {
      setButtonText("Logout");
    } else {
      setButtonText("Signin");
    }
  }, [session]);

  const handleButtonClick = () => {
    if (session.data?.user) {
      console.log("Signing out...");
      signOut().catch((error) => console.error("Sign out error:", error));
    } else {
      console.log("Signing in...");
      signIn().catch((error) => console.error("Sign in error:", error));
    }
  };

  return (
    <div>
      <Nav text={buttonText} handler={handleButtonClick} />
    </div>
  );
};
