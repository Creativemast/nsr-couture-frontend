import Link from "next/link";
import React from "react";

export default function Products1() {
  return (
    <section
      className="collections-grid collections-grid_masonry"
      id="section-collections-grid_masonry"
    >
      <div className="container h-md-100">
        <div className="row h-md-100">
          {/* Colonne gauche - grande image */}
          <div className="col-lg-6 h-md-100">
            <div className="collection-grid__item position-relative h-md-100">
              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/assets/images/collection_khimaret.png)",
                }}
              ></div>
              <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                <p className="text-uppercase mb-1">Nouvelle Collection</p>
                <h3 className="text-uppercase">
                  <strong>Khimaret</strong>
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Explorer
                </Link>
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="col-lg-6 d-flex flex-column">
            {/* Abaat */}
            <div className="collection-grid__item position-relative flex-grow-1 mb-lg-4">
              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/assets/images/collection_abaa.png)",
                }}
              ></div>
              <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                <p className="text-uppercase mb-1">Élégance</p>
                <h3 className="text-uppercase">
                  <strong>Abayat</strong>
                </h3>
                <Link
                  href="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Explorer
                </Link>
              </div>
            </div>

            {/* Accessoires */}
            <div className="position-relative flex-grow-1 mt-lg-1">
              <div className="row h-md-100">
                <div className="col-md-12 h-md-100">
                  <div className="collection-grid__item h-md-100 position-relative">
                    <div
                      className="background-img"
                      style={{
                        backgroundImage:
                          "url(/assets/images/collection_accessoires.png)",
                      }}
                    ></div>
                    <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                      <p className="text-uppercase mb-1">Style</p>
                      <h3 className="text-uppercase">
                        <strong>Accessoires</strong>
                      </h3>
                      <Link
                        href="/shop-1"
                        className="btn-link default-underline text-uppercase fw-medium"
                      >
                        Explorer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fin colonne droite */}
        </div>
      </div>
    </section>
  );
}
