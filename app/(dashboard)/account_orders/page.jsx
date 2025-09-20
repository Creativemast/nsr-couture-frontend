import AccountOrders from "@/components/otherPages/AccountOrders";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import { getCurrentUser } from "@/utlis/getCurrentUser";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard Account Orders",
  description: "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
};
export default async function AccountOrderPage() {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect("/login_register");
  }

  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="my-account container">
          <h2 className="page-title">Orders</h2>
          <div className="row">
            <DashboardSidebar />
            <AccountOrders />
          </div>
        </section>
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
