import { secData,cardData } from "@/utils/dynamicpage"; // Update the path as needed
import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const router = useRouter();
  const { productid } = router.query;

  // Find the product by ID
  const product: cardData | undefined = secData.find((item:any) => item.id === productid);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full max-w-md" />
      <p className="text-lg">Price: {product.price} PKR</p>
      <button className="px-4 py-2 bg-blue-500 text-white mt-4">
        Add to Cart
      </button>
    </div>
  );
}
