import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Shop2 from "@/components/shoplist/Shop2";

export const metadata = {
  title: "Shop 2",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function ShopPage2() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Shop2 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
