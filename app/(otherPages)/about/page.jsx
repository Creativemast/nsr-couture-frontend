import About from "@/components/otherPages/about/About";
import Clients from "@/components/otherPages/about/Clients";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Services from "@/components/otherPages/about/Services";

export const metadata = {
  title: "About",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function AboutPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <About />
        <Services />
        <Clients />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
