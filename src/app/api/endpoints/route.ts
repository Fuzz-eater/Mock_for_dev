import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { getErrorMessage } from "@/lib/error";

export async function GET(
  req: NextRequest,
){
  try{
    const result = await prisma.api.findMany()
    return NextResponse.json({data: result},{status:200})
  }catch(e){
    return NextResponse.json({message:getErrorMessage(e)},{status:500})
  }
}
