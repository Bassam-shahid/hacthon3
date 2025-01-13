  "use client"
  import { createContext, useContext, useState } from "react";

  // CartContext کی تخلیق
  const CartContext = createContext<any>(null);
  
  // CartProvider: جو بھی کمپوننٹ اس کو لپیٹ دے گا، وہ cartData تک رسائی حاصل کر سکے گا
  export const CartProvider = ({ children }: any) => {
    const [cartData, setCartData] = useState<any[]>([]);
  
    const addToCart = (product: any) => {
      setCartData((prev: any[]) => {
        const isProductInCart = prev.find(item => item.id === product.id);
        if (isProductInCart) {
          return prev.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    };
  
    return (
      <CartContext.Provider value={{ cartData, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  // useCart Hook: تاکہ آپ CartContext کو کہیں بھی استعمال کر سکیں
  export const useCart = () => {
    return useContext(CartContext);
  };
  interface cardData {
    id: string;
    title: string;
    image: string;
    price: number;
    // اگر اور پراپرٹیز ہیں تو انہیں بھی شامل کریں
  }
  
  const secData: cardData[] = [
    // آپ کا ڈیٹا یہاں ہو گا
  
  

  
    {
      id: "1",
      image: "/shortsec/modulasofa.png",
      title: "Trenton Modular Sofa_3",
      price: 25000,
    },
    {
      id: "2",
      image: "/shortsec/granitediningtable.png",
      title: "Granite Dining Table With Dining Chair",
      price: 25000,
    },
    {
      id: "3",
      image: "/shortsec/Outdoorbartable.png",
      title: "Out Door Bar Table & Stool",
      price: 25000,
    },
    {
      id: "4",
      image: "/shortsec/Plainconsole.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "5",
      image: "/shop/image1.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "6",
      image: "/shop/image2.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "7",
      image: "/shop/image3.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "8",
      image: "/shop/image4.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "9",
      image: "/shop/image5.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "10",
      image: "/shop/image6.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "11",
      image: "/shop/image7.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    },
    {
      id: "12",
      image: "/shop/image8.png",
      title: "Plain Console With Teak Mirror",
      price: 25000,
    }
  ];

export {secData ,type cardData}