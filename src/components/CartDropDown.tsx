"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/utils/dynamicpage"; 

export default function CartDropdown() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total:any, item:any) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button className="text-sm">&times;</button>
      </div>

      <div className="py-4">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item:any) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <div className="relative h-20 w-20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-sm text-darkyellow">Rs. {item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm">
                    &times;
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                    className="h-6 w-6 border"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-6 w-6 border"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Total */}
      <div className="space-y-4 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="text-darkyellow">Rs. {totalPrice}</span>
        </div>
        <div className="grid gap-2">
          <Link
            href="/cart"
            className="block border text-center px-4 py-2 text-sm"
          >
            View Cart
          </Link>
          <Link
            href="/checkout"
            className="block border text-center px-4 py-2 text-sm"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
