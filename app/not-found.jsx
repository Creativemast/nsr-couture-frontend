import PageNotFound from "./(otherPages)/page-not-found/page";
import React from "react";

export const metadata = {
  title: "Page Not Found",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};

export default function NotFound() {
  return (
    <>
      <PageNotFound />
    </>
  );
}
