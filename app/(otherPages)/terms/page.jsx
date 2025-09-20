import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Terms from "@/components/otherPages/Terms";

export const metadata = {
  title: "Conditions Générales d’Utilisation",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function TermsPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <Terms />
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
