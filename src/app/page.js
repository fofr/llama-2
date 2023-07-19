import React from "react";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container max-w-6xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
      <h1 className={`${spaceGrotesk.className} text-6xl mt-6 mb-12 `}>
        <div className="font-bold text-orange-500 -mb-2">Llama 2</div>
        <span className="text-4xl font-bold">
          Experiments
        </span>
      </h1>
    </main>
  );
}
