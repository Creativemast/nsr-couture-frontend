"use client";

import { useEffect } from "react";

export default function ClientBootstrapProvider({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        console.log("✅ Bootstrap JS loaded");
      });
    }
  }, []);

  return <>{children}</>;
}
