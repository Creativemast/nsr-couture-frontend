import Banner1 from "@/components/shoplist/Banner1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Shop1 from "@/components/shoplist/Shop1";
import Shop9 from "@/components/shoplist/Shop9";

export const metadata = {
  title: "Shop 9",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function ShopPage9() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Banner1 />
        <div className="mb-4 pb-lg-3"></div>
        <Shop9 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
