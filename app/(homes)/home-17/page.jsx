import Banner from "@/components/homes/home-17/Banner";
import Blog from "@/components/homes/home-17/Blog";
import Brands from "@/components/homes/home-17/Brands";
import Categories from "@/components/homes/home-17/Categories";
import Featured from "@/components/homes/home-17/Featured";
import Features from "@/components/homes/home-17/Features";
import Footer17 from "@/components/footers/Footer17";
import Header17 from "@/components/headers/Header17";
import Hero from "@/components/homes/home-17/Hero";
import Products from "@/components/homes/home-17/Products";
import React from "react";
import Testimonials from "@/components/homes/home-17/Testimonials";

export const metadata = {
  title: "Home 17",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function HomePage17() {
  return (
    <>
      <div className="theme-18">
        <Header17 />
        <div className="bg-grey-eeeeee">
          <Hero />
          <Features />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Categories />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Featured />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-4"></div>
          <Banner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Products />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Testimonials />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Blog />
          <div className="mt-3 mt-xl-4 pb-3 pt-1 pb-xl-4"></div>
          <Brands />
          <div className="mt-3 mt-xl-4 pb-3 pt-1 pb-xl-4"></div>
        </div>
        <Footer17 />
      </div>
    </>
  );
}
