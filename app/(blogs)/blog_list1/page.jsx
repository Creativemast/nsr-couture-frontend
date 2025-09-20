import Blog1 from "@/components/blogs/Blog1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
  title: "Blog 1",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function BlogPage1() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Blog1 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
