import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "request-ip";

export const GET = (req: NextRequest) => {
  const ip = req.headers.get("x-forwarded-for");

  console.log("IP: " + ip);

  // req.headers.forEach((v, k, parent) => console.log(k + ": " + v));

  return new NextResponse("x");
};
