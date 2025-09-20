import Link from "next/link";
import React from "react";
import { getCurrentUser } from "@/utlis/getCurrentUser";

export default async function Dashboard({ user }) {
  return (
    <div className="col-lg-9">
      <div className="page-content my-account__dashboard">
        <p>
          Salut <strong>{user?.profile?.first_name?.toUpperCase()} {user?.profile?.last_name?.toUpperCase()}</strong>
        </p>
        <p>
          Depuis votre tableau de bord, vous pouvez consulter vos 
          <Link className="unerline-link ml-2" href="/account_orders" style={{marginLeft: 5}}>
            commandes récentes
          </Link>
          , gérer vos
          <Link className="unerline-link" href="/account_edit_address" style={{marginLeft: 5}}>
            adresses de livraison et de facturation
          </Link>
          , et
          <Link className="unerline-link" href="/account_edit" style={{marginLeft: 5}}>
            modifier votre mot de passe et les informations de votre compte
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
