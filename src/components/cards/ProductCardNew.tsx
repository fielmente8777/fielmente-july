import { ProductsDataTypes } from "@/@types/@homeType";

const ProductCardNew: React.FC<ProductsDataTypes["cards"][0]> = ({
  title,
  description,
  icon,
  fromColor,
  toColor
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl max-sm:h-70 md:max-w-104 w-full overflow-hidden hover:shadow-none duration-300 ease-in-out shadow-md border border-main-border">
      <div className={`flex items-center gap-2.5 py-3.75 px-4.5 bg-linear-to-r ${fromColor} ${toColor} `}>
        <span>{icon}</span>
        <p className="font-semibold text-xl text-white">{title}</p>
      </div>
      <div className="flex-1 px-5 pb-5 bg-white">
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProductCardNew;
