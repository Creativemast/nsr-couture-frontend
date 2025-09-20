import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Shop4 from "@/components/shoplist/Shop4";

export const metadata = {
  title: "Shop 4",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default function ShopPage4() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <Shop4 />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
