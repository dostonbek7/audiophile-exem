import React from "react";
import { Link } from "react-router-dom";
import ProductMiniMenu from "./ProductMiniMenu";

function ProductDetail({ product }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-[52px] lg:gap-[125px] mb-[88px] md:mb-[120px] lg:mb-[160px]">
        <div className="">
          <picture>
            {product.categoryImage.desktop && (
              <source className="rounded-lg"
                media="(min-width: )"
                srcSet={product.categoryImage.desktop.slice(1)}
                alt={product.slug}
              />
            )}
            {product.categoryImage.tablet && (
              <source className="rounded-lg"
                media="(min-width: )"
                srcSet={product.categoryImage.tablet.slice(1)}
                alt={product.slug}
              />
            )}
            <img className="rounded-lg" src={product.categoryImage.mobile.slice(1)} />
          </picture>
        </div>

        <div className="flex flex-col items-start md:pt-[78px] lg:py-[77px] md:pb-[45px]">
          <h1 className="text-2xl mb-6 md:mb-8">{product.name}</h1>
          <p className="text-base mb-6 md:mb-8 md:w-[339px]">
            {product.description}
          </p>
          <p className="text-lg mb-8">
            $ {product.price.toLocaleString("en-Us")}
          </p>
          <div className="flex items-center gap-4">
            <button className="addTo flex  gap-5">
              <span>-</span>
              <span>0</span>
              <span>+</span>
            </button>
            <Link className="btn btn-first py-3">See product</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-[88px]">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          <h2 className="text-xl">FEATURES</h2>
          <p className="text-base md:w-[689px] lg:w-[635px]">
            {product.features}
          </p>
        </div>
        <div className="md:flex lg:flex-col lg:gap-8 items-center justify-between md:w-[549px]">
          <h3 className="text-xl md:self-start lg:self-center">in the box</h3>
          <div>
            <ul>
              {product.includes.map((prod) => {
                return (
                  <li
                    key={Math.random() * new Date()}
                    className="flex items-center gap-6"
                  >
                    <span className="text-base text-sepia">
                      {prod.quantity}x
                    </span>
                    <span className="text-base">{prod.item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* images */}
      {/* <div>
        <div>
          <picture>
            <source media="(min-width: )" srcset="" />
            <source media="(min-width: )" srcset="" />
          <img src="" alt="" />
          </picture>
        </div>
        <div>

        </div>
      </div> */}
      <ProductMiniMenu/>
    </div>
  );
}

export default ProductDetail;
