"use client"
import Image from "next/image"
import Link from "next/link"
import BreadCrumb from "@/components/BreadCrumb"
import Service from "@/components/Service"
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import ShortSec from "@/components/ShortSec"
import  {secData, type cardData}  from "@/utils/dynamicpage";





export default async function ProductDetail({params}:{params:{productid:string}}) {
 const data = secData.find((item:cardData) => item.id === params.productid)
  
  // const image = "hersofa.png"
  return (
    <div>
        <BreadCrumb title="Product Page" url="/"/>
        <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex flex-row sm:flex-col gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="relative w-20 h-20 border cursor-pointer"
              >
                <Image
                  src={`${data?.image}`}
                  alt={`Asgaard sofa view ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="relative flex-1 md:h-80  aspect-square">
            <Image
              src={`${data?.image}`}
              alt="Asgaard sofa main view"
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

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-lg">
                  {/* Star icon placeholder */}
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm">(5 Customer Review)</span>
          </div>

          {/* Description */}
          <p className="text-sm">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced
            audio which boasts a clear midrange and extended highs for a
            sound.
          </p>

          {/* Size Selection */}
          <div className="space-y-2">
            <span className="text-sm">Size</span>
            <div className="flex gap-2">
              {["M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 border text-sm flex items-center justify-center"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-2">
            <span className="text-sm">Color</span>
            <div className="flex gap-2">
              <button className="w-6 h-6 rounded-full bg-purple-600" />
              <button className="w-6 h-6 rounded-full bg-black" />
              <button className="w-6 h-6 rounded-full bg-yellow-700" />
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4">
            <div className="flex border">
              <button className="px-4 py-2 border-r">-</button>
              <input
                type="number"
                value="1"
                className="w-16 text-center"
                readOnly
              />
              <button className="px-4 py-2 border-l">+</button>
            </div>
            <button className="px-8 py-2 border">
              Add To Cart
            </button>
          </div>

          {/* Product Meta */}
          <div className="space-y-2 pt-6 border-t text-sm">
            <div className="flex gap-8">
              <span className="text-gray-600">SKU</span>
              <span>: SS001</span>
            </div>
            <div className="flex gap-8">
              <span className="text-gray-600">Category</span>
              <span>: Sofas</span>
            </div>
            <div className="flex gap-8">
              <span className="text-gray-600">Tags</span>
              <span>: Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-8">
              <span className="text-gray-600">Share</span>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                <Link href="#" className="text-lg"><CiFacebook/></Link>
                <Link href="#" className="text-lg"><CiLinkedin/></Link>
                <Link href="#" className="text-lg"><CiInstagram/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <ShortSec title="More Products" />
        <Service/>
    </div>
      )
}

