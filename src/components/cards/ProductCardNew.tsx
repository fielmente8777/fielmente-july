import { ProductsDataTypes } from "@/@types/@homeType";
import Image from "next/image";

const ProductCardNew: React.FC<ProductsDataTypes["cards"][0]> = ({
  title,
  description,
  icon,
  image,
  color,
}) => {
  return (
    <div className="flex flex-col rounded-xl  md:max-w-104 w-full overflow-hidden hover:shadow-none duration-300 ease-in-out shadow-md border border-main-border">
      <div className="w-full relative aspect-4/2.5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
      <div
        className={`flex items-center gap-2.5 py-3.75 px-4.5`}
        style={{ color: color }}
      >
        <span>{icon}</span>
        <p className="font-semibold text-xl ">{title}</p>
      </div>
      <div className="flex-1 px-5 pb-5 bg-white">
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProductCardNew;
