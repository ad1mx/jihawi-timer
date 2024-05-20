import hd from "humanize-duration";
import { Nunito, Tajawal } from "next/font/google";
import React from "react";

const tajawal = Tajawal({ weight: ["700"], subsets: ["arabic"] });
const nunito = Nunito({ weight: ["700"], subsets: ["latin"] });

const TimerPage = () => {
  const jihawiDate = new Date(2024, 4, 5, 0, 0, 0).getTime();
  const now = new Date().getTime();
  const remainTime = jihawiDate - now;

  return (
    <main className="h-full flex flex-col justify-center text-center px-4">
      <header className={`${tajawal.className} text-3xl flex flex-col`}>
        <span className={`${nunito.className}`}>Time remaing to JIHAWI</span>
        <span>الوقت المتبقي للجهوي</span>
      </header>
      {/* EN */}
      <p
        className={`mt-8 text-3xl font-semibold text-green-400 ${nunito.className}`}
      >
        {hd(remainTime, { units: ["w", "d", "h"], round: true })} (
        {hd(remainTime, { units: ["d"], round: true })})
      </p>
      {/* AR */}
      <p
        dir="rtl"
        className={`mt-2 text-3xl font-semibold text-green-400 ${tajawal.className}`}
      >
        {hd(remainTime, {
          units: ["w", "d", "h"],
          language: "ar",
          digitReplacements: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          round: true,
        })}{" "}
        (
        {hd(remainTime, {
          units: ["d"],
          language: "ar",
          digitReplacements: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          round: true,
        })}
        )
      </p>
    </main>
  );
};

export default TimerPage;
