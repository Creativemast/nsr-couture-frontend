import BannerSlider from "@/components/homes/home-16/BannerSlider";
import Blogs from "@/components/homes/home-16/Blogs";
import Equipments from "@/components/homes/home-16/Equipments";
import Features from "@/components/homes/home-16/Features";
import Footer15 from "@/components/footers/Footer15";
import GridBanner from "@/components/homes/home-16/GridBanner";
import Header15 from "@/components/headers/Header15";
import Hero from "@/components/homes/home-16/Hero";
import MostPopuler from "@/components/homes/home-16/MostPopuler";
import React from "react";
import VideoBanner from "@/components/homes/home-16/VideoBanner";

export const metadata = {
  title: "Home 16",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function HomePage16() {
  return (
    <>
      <div className="theme-16">
        <Header15 />
        <main>
          <Hero />
          <div className="mb-4 mb-xl-5 pt-1 pb-5"></div>
          <GridBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <MostPopuler />
          <div className="mb-3 pb-3 pt-1"></div>
          <VideoBanner />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <BannerSlider />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Equipments />
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          <Blogs />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-4"></div>
          <Features />
          <div className="mb-3 mb-xl-4 pb-3 pt-1 pb-xl-4"></div>
        </main>{" "}
        <Footer15 />
      </div>
    </>
  );
}
