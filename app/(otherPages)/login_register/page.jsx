import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import LoginRegister from "@/components/otherPages/LoginRegister";
import React from "react";

export const metadata = {
  title: "Login Register",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function LoginPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <LoginRegister />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
