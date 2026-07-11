import React from "react";
import { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "STASH | Player Authentication Dashboard",
  description: "Secure access protocol portal to your Stash user hub.",
};

export default async function LoginPage() {
  // If data pre-fetching is needed later (e.g. system status, banners), 
  // it lives directly right here on the server instance.
  
  return (
    <div className="w-full min-h-screen bg-[#05060c]">
      <LoginClient />
    </div>
  );
}