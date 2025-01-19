"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import ShortSec from "@/components/ShortSec";
import { secData } from "@/utils/dynamicpage";

export default function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  const data = secData.find((item) => item.id === params.productid);
  const [count, setCount] = useState(0); // Initial state

  return (
    <div>
      <BreadCrumb title="Product Page" url="/" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex flex-row sm:flex-col gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 border cursor-pointer"
                >
                  <Image
                    src={`${data?.image}`}
                    alt={`Product view ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="relative flex-1 md:h-80 aspect-square">
              <Image
                src={`${data?.image}`}
                alt="Main product view"
                height={500}
                width={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium">{data?.title}</h1>
              <p className="text-xl">Rs. {data?.price}.00</p>
            </div>
            <p className="text-sm">
              This is a high-quality product description to showcase the best
              features of the product.
            </p>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <div className="flex border">
                <button
                  className="px-4 py-2"
                  onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                >
                  -
                </button>
                <p className="px-4 py-2">{count}</p>
                <button
                  className="px-4 py-2"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className="px-8 py-2 border">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <ShortSec title="More Products" />
      <Service />
    </div>
  );
}
