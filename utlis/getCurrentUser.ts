// lib/getCurrentUser.ts

import { cookies } from "next/headers";

export async function getCurrentUser(): Promise<any> {
  const token = (await cookies()).get("token")?.value;
  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // Important: prevents caching on server components
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return (await res.json()).data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}