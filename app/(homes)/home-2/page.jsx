import Banner from "@/components/homes/home-2/Banner";
import Blogs from "@/components/homes/home-2/Blogs";
import Brands from "@/components/homes/home-2/Brands";
import Categories from "@/components/homes/home-2/Categories";
import Footer2 from "@/components/footers/Footer2";
import GridBanner from "@/components/homes/home-2/GridBanner";
import Header2 from "@/components/headers/Header2";
import Hero from "@/components/homes/home-2/Hero";
import Products from "@/components/homes/home-2/Products";
import Products2 from "@/components/homes/home-2/Products2";
import React from "react";

export const metadata = {
  title: "Home 2",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function HomePage2() {
  return (
    <>
      <Header2 />
      <main style={{ paddingTop: "40px" }}>
        <Hero />
        <div className="mb-3 mb-md-4 mb-xl-5 pb-2 pt-1"></div>
        <GridBanner /> <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>
        <Products />
        <div className="mb-1 pb-4"></div>
        <Categories />
        <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
        <Banner />
        <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
        <Products2 />
        <div className="mb-4 pb-4 mb-xl-4 mt-xl-3 pt-xl-3 pb-xl-4"></div>
        <Blogs />
        <div className="mb-5 pb-4 pb-xl-5 mb-xl-5"></div>
        <Brands />
        <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>
      </main>
      <Footer2 />
    </>
  );
}
