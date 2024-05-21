"use client";

import hd, { Options } from "humanize-duration";
import { Nunito, Tajawal } from "next/font/google";
import React, { useEffect, useState } from "react";

const tajawal = Tajawal({ weight: ["700"], subsets: ["arabic"] });
const nunito = Nunito({ weight: ["700"], subsets: ["latin"] });

const TimerPage = () => {
  const jihawiDate = new Date(2024, 5, 5, 8, 30, 0);

  const [remaingTineString, setRemaingTineString] = useState<
    string | undefined
  >();
  const [date, setDate] = useState<string | undefined>();

  useEffect(() => {
    setDate(
      jihawiDate.toLocaleDateString("ar", {
        dateStyle: "full",
      })
    );

    // Update time

    const textOptions = {
      units: ["w", "d", "h", "m", "s"],
      language: "ar",
      digitReplacements: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      round: true,
    } satisfies Options;

    setInterval(() => {
      const remaingTime = jihawiDate.getTime() - Date.now();

      const upText = `${hd(remaingTime, textOptions)} (${hd(remaingTime, {
        ...textOptions,
        units: ["d"],
      })})`;

      setRemaingTineString(upText);
    }, 1000);
  });

  return (
    <main className="h-full flex flex-col justify-center px-4 items-center text-center">
      <header className={`${tajawal.className} text-3xl flex flex-col`}>
        <span className={`${nunito.className}`}>Time remaing to JIHAWI</span>
        <span>الوقت المتبقي للجهوي</span>
      </header>

      <div dir="rtl" className="mt-8 flex text-green-400">
        <p
          className={`mr-2 text-3xl font-semibold text-green-400 ${tajawal.className}`}
        >
          {remaingTineString ?? "..Loading remaing time"}
        </p>
      </div>

      <div className="mt-8 flex">
        <p
          className={`text-3xl font-semibold text-blue-400 ${tajawal.className}`}
        >
          {date ?? "Loading date.."}
        </p>
      </div>
    </main>
  );
};

export default TimerPage;
