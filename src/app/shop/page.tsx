/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable */
// @ts-nocheck
"use client"
import BreadCrumb from "@/components/BreadCrumb";
import Service from "@/components/Service";
import Card from "@/components/Card";
import Link from "next/link";
import { secData, type SecData } from "@/utils/dynamicpage";
import { secData2 } from "@/utils/secData";
import Cart from "../cart/page";

export default function Shop() {

  return (
    <div>
      <BreadCrumb title="Shop" url="shop" />
      <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {secData2.map((cardData: SecData) => (
            <Link
              href={`/shop/${cardData.id}`} // cardData.id کو صحیح طریقے سے پاس کریں
              key={cardData.id} // یہاں cardData.id کا استعمال کریں
              className="cursor-pointer"
            >
              <Card {...cardData} />
            </Link>
          ))}
        </div>
      </div>
      <Service />
    </div>
  );
}
