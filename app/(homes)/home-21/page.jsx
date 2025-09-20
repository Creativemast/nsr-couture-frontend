import BestSelling from "@/components/homes/home-21/BestSelling";
import Blogs from "@/components/homes/home-21/Blogs";
import Category from "@/components/homes/home-21/Category";
import Features from "@/components/homes/home-21/Features";
import Footer21 from "@/components/footers/Footer21";
import Header21 from "@/components/headers/Header21";
import Hero from "@/components/homes/home-21/Hero";
import Lookbook from "@/components/homes/home-21/Lookbook";
import NewArrival from "@/components/homes/home-21/NewArrival";
import React from "react";
import WeeklyDeal from "@/components/homes/home-21/WeeklyDeal";

export const metadata = {
  title: "Home 21",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function HomePage21() {
  return (
    <>
      <div className="theme-22">
        <Header21 />
        <main className="bg-grey-f8f8f8">
          <div className="pb-3 pt-3"></div>
          <Hero />
          <Features />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <WeeklyDeal />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Category />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <NewArrival />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Lookbook />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BestSelling />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Blogs />
          <div className="pb-3 pt-1 pb-xl-5"></div>
        </main>
        <Footer21 />
      </div>
    </>
  );
}
