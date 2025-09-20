import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import NewPassword from "@/components/otherPages/NewPassword";
import React from "react";
import ResetPassword from "@/components/otherPages/ResetPassword";

export const metadata = {
  title: "New Password",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function NewPasswordPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <NewPassword />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
