"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { products1 } from "@/data/products/fashion";
import { useContextElement } from "@/context/Context";

const swiperOptions = {
  modules: [Pagination, Navigation, Autoplay],
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  effect: "none",
  loop: true,
  pagination: {
    el: "#product_carousel .products-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#product_carousel .products-carousel__next",
    prevEl: "#product_carousel .products-carousel__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
  },
};

export default function Products5() {
  const { store } = useContextElement();
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [limitedProducts, setLimitedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLimitedProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/limited/${store?.adn}`);
        if (!res.ok) return null;
        const { data } = await res.json();
        setLimitedProducts(data)
      } catch (err) {
        console.error("Failed to fetch trend products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLimitedProducts()
  }, [store]);

  return (
    <section className="products-carousel container">
      <h2 className="section-title text-uppercase text-center mb-4 pb-xl-2 mb-xl-4">
        Edition <strong>Limitée</strong>
      </h2>

      <div id="product_carousel" className="position-relative">
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {limitedProducts.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide product-card">
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
                    isAddedToCartProducts(elm.çid)
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
                      <span className="money price text-red fw-bold">
                        DZD {elm.discounted_price}
                      </span>
                    </>
                  ) : (
                    <span className="money price">DZD {elm.price}</span>
                  )}
                </div>
                {elm.reviews && (
                  <div className="product-card__review d-flex align-items-center">
                    <div className="reviews-group d-flex">
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                      <svg
                        className="review-star"
                        viewBox="0 0 9 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_star" />
                      </svg>
                    </div>
                    <span className="reviews-note text-lowercase text-secondary ms-1">
                      {elm.reviews}
                    </span>
                  </div>
                )}

                <button
                  className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${isAddedtoWishlist(elm.id) ? "active" : ""
                    }`}
                  title="Ajouter au Wishlist"
                  onClick={() => toggleWishlist(elm.id)}
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
            </SwiperSlide>
          ))}

        </Swiper>}

        <div className="cursor-pointer products-carousel__prev position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_prev_md" />
          </svg>
        </div>
        {/* <!-- /.products-carousel__prev --> */}
        <div className="cursor-pointer products-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_next_md" />
          </svg>
        </div>
        {/* <!-- /.products-carousel__next --> */}

        <div className="products-pagination mt-4 mb-5 d-flex align-items-center justify-content-center"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
