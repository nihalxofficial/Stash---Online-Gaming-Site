import React from "react";
import { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "STASH | Network Provisioning Portal",
  description: "Initialize secure node registration protocols.",
};

export default async function RegisterPage() {
  return <RegisterClient />;
}