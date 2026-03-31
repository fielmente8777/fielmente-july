"use client";
import { SectionWithContainer } from "@/components";
import { useRouter } from "next/navigation";

export default function Notfound() {
  const router = useRouter();

  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl font-bold text-black">
          Ooops. <span className="text-indigo-700">Page Not Found!</span>
        </h1>
        <p className="text-3xl text-black">
          The page you are looking for does not exist.
        </p>
        <p className="text-3xl text-black">
          Looks like you are in the wrong place.
        </p>
        <p className="text-3xl text-black">Let us guide you back!</p>
        <button
          className="px-6 py-3 bg-indigo-700 text-white hover:bg-indigo-600 text-3xl font-bold rounded-full"
          onClick={() => router.push("/")}
        >
          Go Back Home
        </button>
      </div>
    </SectionWithContainer>
  );
}
