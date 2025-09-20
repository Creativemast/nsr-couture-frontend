import Banner from "@/components/homes/home-22/Banner";
import Footer22 from "@/components/footers/Footer22";
import Header8 from "@/components/headers/Header8";
import Hero from "@/components/homes/home-22/Hero";
import OurStory from "@/components/homes/home-22/OurStory";
import React from "react";
import SingleProduct from "@/components/homes/home-22/SingleProduct";

export const metadata = {
  title: "Home 22",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function HomePage22() {
  return (
    <>
      <div className="theme-23">
        <Header8 />
        <main>
          <Hero />
          <Banner />
          <SingleProduct />
          <OurStory />
        </main>
        <Footer22 />
      </div>
    </>
  );
}
