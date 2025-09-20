import "react-tooltip/dist/react-tooltip.css";
import "../public/assets/css/plugins/swiper.min.css";
import "../public/assets/sass/style.scss";
import "rc-slider/assets/index.css";
import "tippy.js/dist/tippy.css";

import { AuthProvider } from "@/context/AuthContext";
import CartDrawer from "@/components/shopCartandCheckout/CartDrawer";
import Context from "@/context/Context";
import CookieContainer from "@/components/common/CookieContainer";
import CustomerLogin from "@/components/asides/CustomerLogin";
import Delivery from "@/components/modals/Delivery";
import Header1 from "@/components/headers/Header1";
import LoginFormPopup from "@/components/common/LoginFormPopup";
import MobileFooter1 from "@/components/footers/MobileFooter1";
import MobileHeader from "@/components/headers/MobileHeader";
import NewsLetter from "@/components/modals/NewsLetter";
import NotFound from "./not-found";
import Notfound from "@/components/otherPages/Notfound";
import ProductAdditionalInformation from "@/components/asides/ProductAdditionalInformation";
import ProductDescription from "@/components/asides/ProductDescription";
import ProductReviews from "@/components/asides/ProductReviews";
import Products2 from "@/components/homes/home-1/Products2";
import QuickView from "@/components/modals/QuickView";
import ScrollTop from "@/components/common/ScrollTop";
import ShopFilter from "@/components/asides/ShopFilter";
import SiteMap from "@/components/modals/SiteMap";
import SizeGuide from "@/components/modals/SizeGuide";
import StoreNotfound from "@/components/otherPages/StoreNotfound";
import Svgs from "@/components/common/Svgs";
import { getCurrentUser } from "@/utlis/getCurrentUser";
import { headers } from "next/headers";
import { redirect } from "next/dist/server/api-utils";

// Utility: fetch store by host
async function fetchStore(host) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stores/url/${host}`, {
      cache: "no-store", // no cache in dev/prod
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.data || null;
  } catch (err) {
    console.error("Failed to fetch store:", err);
    return null;
  }
}

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();

  const headersList = await headers();
  const rawHost = headersList.get("host") || "";
  const domain = rawHost.split(":")[0]; // strip port in dev

  // Fetch store data
  const store = await fetchStore(domain);

  if (!store) {
    return (
      <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Average+Sans:400"
          rel="stylesheet"
          property="stylesheet"
          media="all"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="page-wrapper">
          <div className="mb-4 pb-4"></div>
          <StoreNotfound />
        </main>
      </body>
    </html>
    )
  }

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Average+Sans:400"
          rel="stylesheet"
          property="stylesheet"
          media="all"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider initialUser={user}>
          <Svgs />
          <Context initialStore={store}>
            <MobileHeader />
            <Header1 />
            {children}
            <MobileFooter1 />
            {/* //modals and asides */}
            <LoginFormPopup />
            <QuickView />
            <NewsLetter />
            <CookieContainer />
            <SizeGuide />
            <Delivery />
            <CartDrawer />
            <SiteMap />
            <CustomerLogin />
            <ShopFilter />
            <ProductDescription />
            <ProductAdditionalInformation />
            <ProductReviews />
          </Context>
        </AuthProvider>
        <div className="page-overlay" id="pageOverlay"></div>
        <ScrollTop />
      </body>
    </html>
  );
}
