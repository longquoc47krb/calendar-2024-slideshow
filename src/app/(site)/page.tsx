"use client";
import Image from "next/image";
import Loading from "../components/loading";
import { imageList } from "../constants/image";
import useLoading from "../hooks/useLoading";

import { useState } from "react";
import Gallery from "../components/gallery";

export default function Home() {
  const { isLoaded, progress, showPage } = useLoading();
  console.log({ isLoaded, progress });
  if (!showPage) return <Loading isLoaded={isLoaded} progress={progress} />;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-4">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-white text-2xl">
          CALENDAR 2024 - Made by Lonq
        </h1>
      </div>
      <Gallery images={imageList} />
    </main>
  );
}
