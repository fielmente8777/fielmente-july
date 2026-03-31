type CtaSectionProps = {
  title: string;
  description: string;
  buttonText?: string;
  variant?: "dark" | "light";
   children?: React.ReactNode;
};

const CtaSection = ({
  title,
  description,
  buttonText,
  variant = "dark",
  children,
}: CtaSectionProps) => {
  return (
    <div className="w-full px-4">
      <div
        className={`max-w-5xl mx-auto rounded-2xl px-8 py-12 text-center ${
          variant === "dark"
            ? "bg-gradient-to-r from-black via-blue-950 to-black text-white"
            : "bg-white text-black shadow-md"
        }`}
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          {title}
        </h2>

        {/* Description */}
        <p
          className={`mb-6 ${
            variant === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Button */}
        {/* <button
          className={`px-6 py-2 rounded-lg font-medium ${
            variant === "dark"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {buttonText}
        </button> */}
        {children && (
          <div className="mt-6 flex justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default CtaSection;