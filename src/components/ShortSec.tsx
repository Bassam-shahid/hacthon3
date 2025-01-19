import Cart from "@/app/cart/page";
import Card from "@/components/Card";
import cartData from "@/components/ShortSec";
import { cardData } from "@/utils/dynamicpage";
import { secData2, types } from "@/utils/secData";

export interface Sect {
  title: string;
  description?: string;
  cardData: any[];
}

export default function ShortSec({ title, description,  }: Sect) {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-16 lg:px-32 flex justify-center items-center">
      <div className="space-y-8 flex flex-col justify-center items-center py-8">
        <h1 className="text-4xl font-semibold">{title}</h1>
        {description && <p className="text-sm text-gray-600">{description}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {secData2?.map((card: types, index: number) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div>
          <span className="text-xl text-black border-b-2 font-semibold border-black">View More</span>
        </div>
      </div>
    </div>
  );
}



 