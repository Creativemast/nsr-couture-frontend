import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct14 from "@/components/singleProduct/SingleProduct14";
import { allProducts } from "@/data/products";

export const metadata = {
  title: "Shop Single 4",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default async function ProductDetailsPage4(props) {
  const params = await props.params;
  const productId = params.id;
  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        <SingleProduct14 product={product} />
        <RelatedSlider />
      </main>
      <Footer1 />
    </>
  );
}
