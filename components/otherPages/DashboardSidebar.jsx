"use client";

import { usePathname, useRouter } from "next/navigation";

import Cookies from "js-cookie";
import Link from "next/link";
import { dashboardMenuItems } from "@/data/menu";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/login_register");
  };

  return (
    <div className="col-lg-3">
      <ul className="account-nav">
        {dashboardMenuItems.map((elm, i) => (
          <li key={i}>
            <Link
              href={elm.href}
              className={`menu-link menu-link_us-s ${
                pathname == elm.href ? "menu-link_active" : ""
              } `}
            >
              {elm.title}
            </Link>
          </li>
        ))}
        <li key="logout">
          <button
            onClick={handleLogout}
            className="menu-link menu-link_us-s w-full text-left"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >
            Se déconnecter
          </button>
        </li>
      </ul>
    </div>
  );
}
