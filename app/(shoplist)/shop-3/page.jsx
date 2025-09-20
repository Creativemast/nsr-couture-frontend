import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Shop3 from "@/components/shoplist/Shop3";

export const metadata = {
  title: "Shop 3",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function ShopPage3() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Shop3 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
