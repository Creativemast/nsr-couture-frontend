import Link from "next/link";
import React from "react";

export default function StoreNotfound() {
  return (
    <section className="page-not-found">
      <div className="content container text-center">
        <h2 className="mb-3">OUPS !</h2>
        <h3 className="mb-3">Boutique non trouvée</h3>
        <p className="mb-3">
          Désolé, nous n'avons pas pu trouver la boutique que vous cherchiez. 
          Il se peut que l'URL soit incorrecte ou que la boutique ait été supprimée.
        </p>
      </div>
    </section>
  );
}
