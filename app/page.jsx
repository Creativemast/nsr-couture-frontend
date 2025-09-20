import HomePage1 from "./(homes)/home-1/page";
import HomePage15 from "./(homes)/home-15/page";
import { headers } from "next/headers";

export async function generateMetadata() {
  const headersList = await headers();
  const rawHost = headersList.get("host") || "";
  const domain = rawHost.split(":")[0];

  const store = await fetchStore(domain);

  return {
    title: store?.label
      ? `Accueil - ${store.label}`
      : "Accueil - WOLF",
    description:
      "Découvrez l'élégance moderne à travers des collections de mode uniques et raffinées.",
    icons: {
      icon: store?.logo
        ? `${process.env.NEXT_PUBLIC_API_URL}${store.logo}`
        : "/favicon.ico",
    },
  };
}

export async function fetchStore(host) {
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


export default function Home() {
  return (
    <>
      <HomePage1 />
    </>
  );
}
