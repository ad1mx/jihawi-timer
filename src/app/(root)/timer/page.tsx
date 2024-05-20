import hd from "humanize-duration";
import { Nunito, Tajawal } from "next/font/google";
import React from "react";

const tajawal = Tajawal({ weight: ["700"], subsets: ["arabic"] });
const nunito = Nunito({ weight: ["700"], subsets: ["latin"] });

const TimerPage = () => {
  const jihawiDate = new Date(2024, 5, 5, 0, 0, 0).getTime();
  const now = new Date().getTime();
  const remainTime = jihawiDate - now;

  return (
    <main className="h-full flex flex-col justify-center items-center">
      <header
        className={`${tajawal.className} text-3xl items-center flex flex-col`}
      >
        <span className={`${nunito.className}`}>Time remaing to JIHAWI</span>
        <span>الوقت المتبقي للجهوي</span>
      </header>
      <p
        className={`mt-5 text-3xl font-semibold text-green-400 ${nunito.className}`}
      >
        {hd(remainTime, { units: ["w", "d", "h"], round: true })} (
        {hd(remainTime, { units: ["d"], round: true })})
      </p>
    </main>
  );
};

export default TimerPage;
