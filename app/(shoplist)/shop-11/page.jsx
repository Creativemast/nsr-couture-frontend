import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Shop11 from "@/components/shoplist/Shop11";

export const metadata = {
  title: "Shop 11",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function ShopPage11() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Shop11 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
