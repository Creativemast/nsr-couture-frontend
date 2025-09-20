"use client"

import React from "react";
import { useContextElement } from "@/context/Context";

export default function Terms() {
  const { store } = useContextElement();

  return (
    <section className="container mw-930 lh-30">
      <h2 className="section-title text-uppercase fw-bold mb-5">
        Conditions Générales d’Utilisation
      </h2>

      <h6 className="mb-3">1. Objet</h6>
      <p className="mb-4 pb-3">
        Les présentes Conditions Générales régissent l’utilisation du site {store?.label}. 
        En accédant à notre site, vous acceptez sans réserve l’ensemble des conditions ci-dessous. 
        Nous vous invitons à les lire attentivement avant toute utilisation.
      </p>

      <h6 className="mb-3">2. Utilisation du contenu</h6>
      <p className="mb-4 pb-3">
        Tout le contenu présent sur le site {store?.label}, y compris les textes, images, vidéos, logos et designs, 
        est la propriété exclusive de {store?.label} ou de ses partenaires. 
        Toute reproduction, modification ou utilisation à des fins commerciales sans autorisation écrite est strictement interdite.
      </p>

      <h6 className="mb-3">3. Commandes et Paiement</h6>
      <p className="mb-4 pb-3">
        Toutes les commandes passées sur {store?.label} sont soumises à la disponibilité des produits. 
        Le paiement est sécurisé et peut être effectué à la livraison. 
        La validation de votre commande vaut acceptation des prix et descriptions des produits.
      </p>

      <h6 className="mb-3">4. Livraison</h6>
      <p className="mb-4 pb-3">
        {store?.label} assure la livraison de ses produits dans 58 wilayas. Les délais de livraison peuvent varier 
        selon la localisation et le type de produit. Un numéro de suivi vous sera communiqué pour suivre votre commande.
      </p>

      <h6 className="mb-3">5. Conformité des produits</h6>
      <p className="mb-4 pb-3">
        {store?.label} s’efforce de présenter les produits avec exactitude. 
        Toutefois, de légères variations de couleurs ou de tailles peuvent apparaître entre le produit reçu et la photo présentée sur le site.
      </p>

      <h6 className="mb-3">6. Droit de rétractation</h6>
      <p className="mb-4 pb-3">
        Conformément à la réglementation en vigueur, vous disposez d’un délai de 3 jours à compter de la réception de votre commande pour exercer votre droit de rétractation. 
        Les produits doivent être retournés dans leur état d’origine et accompagnés du justificatif d’achat.
      </p>

      <h6 className="mb-3">7. Limitation de responsabilité</h6>
      <p className="mb-4 pb-3">
        {store?.label} ne pourra être tenue responsable des dommages directs ou indirects résultant de l’utilisation de son site ou de produits achetés en ligne, 
        sauf en cas de faute lourde ou intentionnelle. Nous ne sommes pas responsables des retards de livraison dus à des circonstances indépendantes de notre volonté.
      </p>

      <h6 className="mb-3">8. Protection des données personnelles</h6>
      <p className="mb-4 pb-3">
        Les informations collectées lors de votre commande sont utilisées uniquement pour le traitement et la livraison de vos achats. 
        Conformément à la loi, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles.
      </p>

      <h6 className="mb-3">9. Loi applicable et juridiction</h6>
      <p className="mb-4 pb-3">
        Les présentes conditions sont régies par la législation algérienne. 
        En cas de litige, les tribunaux algériens seront seuls compétents.
      </p>

      <h6 className="mb-3">10. Modification des conditions</h6>
      <p className="mb-4 pb-3">
        {store?.label} se réserve le droit de modifier à tout moment les présentes conditions. 
        Les utilisateurs sont invités à consulter régulièrement cette page pour prendre connaissance des éventuelles mises à jour.
      </p>

      <p className="mb-4 pb-3">
        En utilisant le site <strong>{store?.label}</strong>, vous reconnaissez avoir lu et accepté les présentes Conditions Générales d’Utilisation.
      </p>
    </section>
  );
}