"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Star from "@/components/common/Star";
import { products51 } from "@/data/products/fashion";
import { useContextElement } from "@/context/Context";

const filterCategories = ["Tous", "Nouveautés", "Meilleures Ventes", "Les Mieux Notés"];


export default function Products2() {
  const { store } = useContextElement();
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(filterCategories[0]);
  const [trendProducts, setTrendProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/trend/${store?.adn}?section=${currentCategory}`);
        if (!res.ok) return null;
        const { data } = await res.json();
        setTrendProducts(data)
      } catch (err) {
        console.error("Failed to fetch trend products:", err);
      } finally {
        setLoading(false);
      }
    }
    if (currentCategory != "All") {
      fetchTrendProducts()
    }
  }, [currentCategory]);

  useEffect(() => {
    const fetchTrendProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/trend/${store?.adn}`);
        if (!res.ok) return null;
        const { data } = await res.json();
        setTrendProducts(data)
      } catch (err) {
        console.error("Failed to fetch trend products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendProducts()
  }, [store])

  return (
    <section className="products-grid container">
      <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
        Nos produits <strong>En Tendance</strong>
      </h2>

      <ul className="nav nav-tabs mb-3 text-uppercase justify-content-center">
        {filterCategories.map((elm, i) => (
          <li
            onClick={() => setCurrentCategory(elm)}
            key={i}
            className="nav-item"
            role="presentation"
          >
            <a
              className={`nav-link nav-link_underscore ${
                currentCategory == elm ? "active" : ""
              }`}
            >
              {elm}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content pt-2" id="collections-tab-content">
        <div
          className="tab-pane fade show active"
          id="collections-tab-1"
          role="tabpanel"
          aria-labelledby="collections-tab-1-trigger"
        >
          <div className="row">
            {loading ? (
              <div className="text-center my-5">
                <div className="spinner-border text-primary" role="status"></div>
              </div>
            ) : trendProducts.length > 0 ? (
              trendProducts.slice(0, 8).map((elm, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-3">
                  <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                    <div className="pc__img-wrapper">
                      <Link href={`/product1_simple/${elm._id}`}>
                        <Image
                          loading="lazy"
                          src={elm?.image ? `${process.env.NEXT_PUBLIC_API_URL}${elm?.image}` : null}
                          width="330"
                          height="400"
                          alt={elm.label}
                          className="pc__img"
                        />
                        {elm?.productdetails?.filter(pd => pd.type === 'IMAGE')?.length && (
                          <Image
                            loading="lazy"
                            src={elm?.productdetails?.filter(pd => pd.type === 'IMAGE')?.length ? 
                                `${process.env.NEXT_PUBLIC_API_URL}${elm?.productdetails?.filter(pd => pd.type === 'IMAGE')[0]?.data}`:
                                null}
                            width="330"
                            height="400"
                            className="pc__img pc__img-second"
                            alt="image"
                          />
                        )}
                      </Link>
                      <div className="position-absolute right-0 top-0">
                        {elm.discounted_price !== elm.price ? (
                          <div className="product-label fs-12 text-uppercase bg-red text-white position-static py-0 mx-3 mt-3 mb-2">
                            -{Math.round((elm.price - elm.discounted_price) / elm.price * 100)}%
                          </div>
                        ) : null}
                      </div>
                      <button
                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                        onClick={() => addProductToCart(elm._id)}
                        title={
                          isAddedToCartProducts(elm._id)
                            ? "Déja ajouté"
                            : "Ajouter au panier"
                        }
                      >
                        {isAddedToCartProducts(elm._id)
                          ? "Déja ajouté"
                          : "Ajouter au panier"}
                      </button>
                    </div>

                    <div className="pc__info position-relative">
                      <p className="pc__category">{elm.category?.label}</p>
                      <h6 className="pc__title">
                        <Link href={`/product1_simple/${elm._id}`}>
                          {elm.label}
                        </Link>
                      </h6>
                      <div className="product-card__price d-flex">
                        {elm.discounted_price !== elm.price ? (
                          <>
                            <span className="money price text-muted" style={{ textDecoration: "line-through", marginRight: 8 }}>
                              DZD {elm.price}
                            </span>
                            <span className="money price fw-bold text-red">
                              DZD {elm.discounted_price}
                            </span>
                          </>
                        ) : (
                          <span className="money price">DZD {elm.price}</span>
                        )}
                      </div>
                      {elm.reviews?.length && (<div className="product-card__review d-flex align-items-center">
                        <div className="reviews-group d-flex">
                          <Star stars={elm.rating ?? 5} />
                        </div>
                        <span className="reviews-note text-lowercase text-secondary ms-1">
                          {elm.reviews ?? 0}
                        </span>
                      </div>)}

                      <button
                        className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                          isAddedtoWishlist(elm._id) ? "active" : ""
                        }`}
                        title="Ajouter à la Wishlist"
                        onClick={() => toggleWishlist(elm._id)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_heart" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-100">Aucun produit en tendance trouvé.</p>
            )}
          </div>
          {/* <!-- /.row --> */}
          <div className="text-center mt-2">
            <Link
              className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
              href="/shop-1"
            >
              Explorer plus
            </Link>
          </div>
        </div>

        {/* <!-- /.tab-pane fade show--> */}
      </div>
      {/* <!-- /.tab-content pt-2 --> */}
    </section>
  );
}
