import Footer7 from "@/components/footers/Footer7";
import Header8 from "@/components/headers/Header8";
import Hero from "@/components/homes/home-8/Hero";
import React from "react";

export const metadata = {
  title: "Home 8",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function HomePage8() {
  return (
    <>
      <Header8 />
      <main>
        <Hero />
      </main>
      <Footer7 />
    </>
  );
}
