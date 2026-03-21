import { ProductsDataTypes } from "@/@types/@homeType";

const ProductCard: React.FC<ProductsDataTypes["cards"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-[#FAFAFA] md:max-w-78.25 w-full border border-[#E3E3E3] rounded-2xl md:p-6 p-5 space-y-4 group hover:bg-[#2b59ff] transition-colors duration-300 ease-in-out">
      <div className="group-hover:bg-white group-hover:text-[#2b59ff] group-hover:border-none flex items-center justify-center  w-14 aspect-square rounded-full border border-[#E3E3E3]">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-primary group-hover:text-white">
          {title}
        </h3>
        <p className=" text-[#6B7280] group-hover:text-[#DDDDDD]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;