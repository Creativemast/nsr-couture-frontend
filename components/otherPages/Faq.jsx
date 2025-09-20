const accordionData = [
  {
    id: 1,
    heading: "Quels produits proposez-vous ?",
    body: `NSR Couture propose une large gamme de vêtements et accessoires de haute qualité, incluant des tenues traditionnelles, modernes et sur mesure, adaptées à toutes les occasions.`,
    expanded: true,
  },
  {
    id: 2,
    heading: "Comment passer une commande ?",
    body: `Pour passer une commande, sélectionnez le produit souhaité, choisissez la taille et la couleur, puis ajoutez-le au panier. Finalisez votre commande en fournissant vos informations de livraison et en procédant au paiement.`,
    expanded: false,
  },
  {
    id: 3,
    heading: "Puis-je annuler ma commande ?",
    body: `Vous pouvez annuler votre commande dans un délai de 24 heures après l'avoir passée. Passé ce délai, veuillez contacter notre service client pour connaître les options disponibles.`,
    expanded: false,
  },
];

const accordionData2 = [
  {
    id: 1,
    heading: "Faites-vous la livraison ?",
    body: `Oui, nous livrons dans 58 wilayas à travers l'Algérie. Les frais et délais de livraison peuvent varier selon la région et le type de produit commandé.`,
    expanded: true,
  },
  {
    id: 2,
    heading: "Quels sont les délais de livraison ?",
    body: `Les délais de livraison varient généralement entre 2 et 7 jours ouvrables, selon votre localisation et la disponibilité des produits.`,
    expanded: false,
  },
  {
    id: 3,
    heading: "Puis-je suivre ma livraison ?",
    body: `Oui, dès l'expédition, un numéro de suivi vous sera communiqué pour suivre votre commande en temps réel depuis notre site ou le transporteur.`,
    expanded: false,
  },
];

const accordionData3 = [
  {
    id: 1,
    heading: "Quels modes de paiement acceptez-vous ?",
    body: `Nous acceptons actuellement le paiement à la livraison (espèces ou carte bancaire) pour garantir une sécurité maximale et une expérience simple pour nos clients.`,
    expanded: true,
  },
  {
    id: 2,
    heading: "Puis-je obtenir une facture ?",
    body: `Oui, une facture détaillée est générée automatiquement pour chaque commande et vous sera envoyée avec votre livraison ou par email.`,
    expanded: false,
  },
  {
    id: 3,
    heading: "Les paiements sont-ils sécurisés ?",
    body: `Oui, tous les paiements sont sécurisés grâce à nos partenaires de paiement et au protocole SSL, garantissant la protection de vos informations personnelles.`,
    expanded: false,
  },
];

export default function Faq() {
  return (
    <section className="container mw-930 lh-30">
      <h2 className="section-title text-uppercase fw-bold mb-5">
        QUESTIONS FRÉQUEMMENT POSÉES
      </h2>

      <h3 className="mb-4">Commandes</h3>
      <div id="faq_accordion" className="faq-accordion accordion mb-5">
        {accordionData.map((item) => (
          <div key={item.id} className="accordion-item">
            <h5 className="accordion-header" id={`faq-accordion-heading-${item.id}`}>
              <button
                className={`accordion-button ${!item.expanded ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-accordion-collapse-${item.id}`}
                aria-expanded={item.expanded}
                aria-controls={`faq-accordion-collapse-${item.id}`}
              >
                {item.heading}
              </button>
            </h5>
            <div
              id={`faq-accordion-collapse-${item.id}`}
              className={`accordion-collapse collapse ${item.expanded ? "show" : ""}`}
              aria-labelledby={`faq-accordion-heading-${item.id}`}
              data-bs-parent="#faq_accordion"
            >
              <div className="accordion-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-4">Livraison</h3>
      <div id="faq_accordion_2" className="faq-accordion accordion mb-5">
        {accordionData2.map((item) => (
          <div key={item.id} className="accordion-item">
            <h5 className="accordion-header" id={`faq-accordion-heading-2-${item.id}`}>
              <button
                className={`accordion-button ${!item.expanded ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-accordion-collapse-2-${item.id}`}
                aria-expanded={item.expanded}
                aria-controls={`faq-accordion-collapse-2-${item.id}`}
              >
                {item.heading}
              </button>
            </h5>
            <div
              id={`faq-accordion-collapse-2-${item.id}`}
              className={`accordion-collapse collapse ${item.expanded ? "show" : ""}`}
              aria-labelledby={`faq-accordion-heading-2-${item.id}`}
              data-bs-parent="#faq_accordion_2"
            >
              <div className="accordion-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-4">Paiement</h3>
      <div id="faq_accordion_3" className="faq-accordion accordion mb-5">
        {accordionData3.map((item) => (
          <div key={item.id} className="accordion-item">
            <h5 className="accordion-header" id={`faq-accordion-heading-3-${item.id}`}>
              <button
                className={`accordion-button ${!item.expanded ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-accordion-collapse-3-${item.id}`}
                aria-expanded={item.expanded}
                aria-controls={`faq-accordion-collapse-3-${item.id}`}
              >
                {item.heading}
              </button>
            </h5>
            <div
              id={`faq-accordion-collapse-3-${item.id}`}
              className={`accordion-collapse collapse ${item.expanded ? "show" : ""}`}
              aria-labelledby={`faq-accordion-heading-3-${item.id}`}
              data-bs-parent="#faq_accordion_3"
            >
              <div className="accordion-body">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
