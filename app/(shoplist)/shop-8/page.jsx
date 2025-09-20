import Categories from "@/components/shoplist/Categories";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import Shop8 from "@/components/shoplist/Shop8";

export const metadata = {
  title: "Shop 8",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function ShopPage8() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Categories />
        <div className="mb-4 pb-lg-3"></div>
        <Shop8 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
