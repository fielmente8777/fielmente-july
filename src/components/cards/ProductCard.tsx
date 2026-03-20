import { ProductsDataTypes } from "@/@types/@homeType";

export const ProductCard: React.FC<ProductsDataTypes["cards"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-[#FAFAFA] border border-[#E3E3E3] rounded-2xl md:p-6 p-3.5 space-y-4 group hover:bg-[#2b59ff] transition-colors duration-300 ease-in-out">
      <div className="group-hover:bg-white group-hover:text-[#2b59ff] group-hover:border-none flex items-center justify-center  w-14 aspect-square rounded-full border border-[#E3E3E3]">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="md:text-2xl text-lg font-semibold text-primary group-hover:text-white">
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] group-hover:text-[#DDDDDD]">
          {description}
        </p>
      </div>
    </div>
  );
};