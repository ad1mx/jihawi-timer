import { AiFillClockCircle, AiFillCalendar } from "@/icons";
import hd from "humanize-duration";
import { Nunito, Tajawal } from "next/font/google";
import React from "react";

const tajawal = Tajawal({ weight: ["700"], subsets: ["arabic"] });
const nunito = Nunito({ weight: ["700"], subsets: ["latin"] });

const TimerPage = () => {
  const jihawiDate = new Date(2024, 5, 5, 0, 0, 0);
  const remainTime = jihawiDate.getTime() - Date.now();

  return (
    <main className="h-full flex flex-col justify-center px-4 items-center">
      <header className={`${tajawal.className} text-3xl flex flex-col`}>
        <span className={`${nunito.className}`}>Time remaing to JIHAWI</span>
        <span>الوقت المتبقي للجهوي</span>
      </header>
      {/* EN */}
      <div className="mt-8 flex text-green-400">
        <AiFillClockCircle className="text-4xl text-green-300" />
        <p className={`ml-2 text-3xl font-semibold ${nunito.className}`}>
          {hd(remainTime, { units: ["w", "d", "h"], round: true })} (
          {hd(remainTime, { units: ["d"], round: true })})
        </p>
      </div>
      {/* AR */}
      <div dir="rtl" className="mt-2 flex text-green-400">
        <AiFillClockCircle className="text-4xl text-green-300" />
        <p
          className={`mr-2 text-3xl font-semibold text-green-400 ${tajawal.className}`}
        >
          {hd(remainTime, {
            units: ["w", "d", "h"],
            language: "ar",
            digitReplacements: [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
            ],
            round: true,
          })}{" "}
          (
          {hd(remainTime, {
            units: ["d"],
            language: "ar",
            digitReplacements: [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
            ],
            round: true,
          })}
          )
        </p>
      </div>
      {/* DATE */}
      <div className="mt-8 flex">
        <AiFillCalendar className="text-4xl text-blue-300" />
        <p
          className={`ml-2 text-3xl font-semibold text-blue-400 ${tajawal.className}`}
        >
          {jihawiDate.toLocaleDateString("ar", {
            dateStyle: "full",
          })}
        </p>
      </div>
    </main>
  );
};

export default TimerPage;
